import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postsApi } from '../../api/postsApi'

export const getPostByID = createAsyncThunk(
  'posts/fetchById',
    async (postId) => {
      return await postsApi.fetchById(postId)
     }
  )

  export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
      async () => {
        return await postsApi.fetchPosts()
       }
    )

  export const getFreshPosts = createAsyncThunk(
      'posts/fetchFreshPosts',
        async (limit) => {
          return await postsApi.fetchFreshPosts(limit)
         }
  )

const initialState = {
  posts: {
    list: null,
    loading: false,
  },
  postForView: {
    post: null,
    loading: false,
  },
  freshPosts: {
    posts: null,
    loading: true,
  },
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    editPost: (state, action) => {
      state.posts.list = state.posts.list.map((post) => {
        if (post.id === action.payload.id) {
            return action.payload
        } 
        return post
      })
    },
    addPost: (state, action) => {
      const newPost = {...action.payload}
      newPost.id = new Date().getTime()
      state.posts.list = state.posts.list ? [newPost,...state.posts.list] : [newPost]
    },
    showPost: (state, action) => {
      state.postForView =  {
        post: action.payload,
        loading: false,
      }   
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(getPostByID.pending, (state) => {
      state.postForView =  {
        post: null,
        loading: true,
      }
    })
    .addCase(getPostByID.fulfilled, (state, action) => {
      state.postForView =  {
        post: action.payload,
        loading: false,
      }
    })
    .addCase(getPosts.pending, (state) => {
      state.posts =  {
        list: null,
        loading: true,
      }
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.posts =  {
        list: action.payload,
        loading: false,
      }
    })
    .addCase(getFreshPosts.pending, (state) => {
      state.freshPosts =  {
        posts: null,
        loading: true,
      }
    })
    .addCase(getFreshPosts.fulfilled, (state, action) => {
      state.freshPosts =  {
        posts: action.payload,
        loading: false,
      }
    })
  }
})

export const { addPost, editPost, showPost } = postsSlice.actions

export default postsSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postsApi } from '../../api/postsApi';

export const getPostByID = createAsyncThunk(
  'posts/fetchById',
  async (postId) => {
    return await postsApi.fetchById(postId);
  }
)

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return await postsApi.fetchPosts();
  }
)

export const getFreshPosts = createAsyncThunk(
  'posts/fetchFreshPosts',
  async (limit) => {
    return await postsApi.fetchFreshPosts(limit);
  }
)

export const getFilteredPosts = createAsyncThunk(
  'posts/fetchByFilter',
  async (server) => {
    return await postsApi.fetchByFilter(server);
  }
)
const initialState = {
  posts: {
    list: null,
    loading: false,
    isPostsFetched: false,
  },
  postForView: {
    post: null,
    loading: false,
  },
  freshPosts: {
    posts: null,
    loading: false,
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
      const newPost = { ...action.payload };
      newPost.id = new Date().getTime();
      state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
    },
    showPost: (state, action) => {
      state.postForView = {
        post: action.payload,
        loading: false,
      }
    },
    deletePost: (state, action) => {
      state.posts.list = state.posts.list.filter((item) => item.id !== action.payload.id)
      state.postForView = {
        post: null,
        loading: false,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostByID.pending, (state) => {
        state.postForView = {
          post: null,
          loading: true,
        }
      })
      .addCase(getPostByID.fulfilled, (state, action) => {
        state.postForView = {
          post: action.payload,
          loading: false,
        }
      })
      .addCase(getPosts.pending, (state) => {
        state.posts = {
          list: null,
          loading: true,
          isPostsFetched: false,
        }
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = {
          list: action.payload,
          loading: false,
          isPostsFetched: true,
        }
      })
      .addCase(getFreshPosts.pending, (state) => {
        state.freshPosts = {
          posts: null,
          loading: true,
        }
      })
      .addCase(getFreshPosts.fulfilled, (state, action) => {
        state.freshPosts = {
          posts: action.payload,
          loading: false,
        }
      })
      .addCase(getFilteredPosts.pending, (state) => {
        state.posts.loading = true;
      })
      .addCase(getFilteredPosts.fulfilled, (state, action) => {
        state.posts = {
          list: action.payload,
          loading: false,
        }
      })
  }
})

export const { addPost, editPost, showPost, deletePost, filterPosts } = postsSlice.actions

export default postsSlice.reducer
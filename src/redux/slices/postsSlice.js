import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    editPost: (state, action) => {

    },
    getPost: (state, action) => {

    },
    addPost: (state, action) => {
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, editPost, getPost } = postsSlice.actions

export default postsSlice.reducer
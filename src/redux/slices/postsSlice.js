import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      title: '1 post',
      image: 'https://www.reclamare.ua/wp-content/uploads/2015/10/today-trainee-tomorrow.jpg',
      text: 'Lorem, ipsum dolor',
    },
    {
      id: 2,
      title: '2 post',
      image: 'https://habrastorage.org/r/w1560/webt/s7/gh/43/s7gh43i88dmawmqioyllqf4ho5q.png',
      text: 'Lorem, ipsum dolor',
    },
    {
      id: 3,
      title: '3 post',
      image: 'https://blog.skillfactory.ru/wp-content/uploads/2023/02/frontend-2-2058753.jpg',
      text: 'Lorem, ipsum dolor',
    },
    {
      id: 4,
      title: '4 post',
      image: 'https://blog.skillfactory.ru/wp-content/uploads/2023/02/frontend-2-2058753.jpg',
      text: 'Lorem, ipsum dolor',
    },
  ],
  postForView: null,
  freshPosts: null,
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
      state.postForView = state.list.find((item) => item.id === action.payload)
    },
    getFreshPosts: (state, action) => {
      state.freshPosts = state.list.slice(0, 3)
    },
    addPost: (state, action) => {
      
    },
  },
})

export const { setPosts, editPost, getPost, getFreshPosts } = postsSlice.actions

export default postsSlice.reducer
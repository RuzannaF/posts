import React, { useEffect } from 'react';
import { Posts } from '../../components/posts';
import { Post } from '../../components/posts/post';
import { Container } from '../../components/сontainer';
import * as SC from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { getFreshPosts } from '../../redux/slices/postsSlice';

export const MainPage = () => {
  const postForView = useSelector((state) => state.posts.postForView.post)
  const { posts } = useSelector((state) => state.posts.freshPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFreshPosts())
  }, [])
  return (
    <Container>
      {posts && <>
        <SC.Title>Свежие публикации</SC.Title>
        <Posts posts={posts} />
      </>
      }
      {postForView && <>
        <SC.Title>Последний просмотренный пост</SC.Title>
        <Post post={postForView} />
      </>
      }
    </Container>
  )
}
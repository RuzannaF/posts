import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Posts } from '../../components/posts';
import { Post } from '../../components/posts/post';
import { Container } from '../../components/сontainer';
import { Typo } from '../../components/Typo'
import * as SC from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { getFreshPosts } from '../../redux/slices/postsSlice';


export const MainPage = () => {
  const mainState = useSelector((state) => state.posts)
  const postForView = mainState.postForView.post
  const { posts } = mainState.freshPosts
  const { list, isPostsFetched } = mainState.posts
  const dispatch = useDispatch()

  let postsFromList = []
  if (list) {
    postsFromList = list.slice(0, 3)
  }

  useEffect(() => {
    dispatch(getFreshPosts())
  }, [])

  if (postsFromList.length === 0 && isPostsFetched) {
    return (
      <Container>
        <Typo>Постов уже нет...</Typo>
        <Link to='/posts/add'>Добавить посты</Link>
      </Container>
    )
  }

  return (
    <Container>
      {!list && posts && <>
        <SC.Title>Свежие публикации</SC.Title>
        <Posts posts={posts} />
      </>
      }
      {postsFromList.length !== 0 && <>
        <SC.Title>Свежие публикации</SC.Title>
        <Posts posts={postsFromList} />
      </>
      }
      {postForView ? <Container>
        <Typo>Последний просмотренный пост</Typo>
        <Post post={postForView}></Post>
      </Container> : null}
    </Container>
  )
}
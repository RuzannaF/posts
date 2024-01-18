import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/сontainer";
import { Posts } from "../../components/posts";
import * as SC from './styles'
import { getPosts } from "../../redux/slices/postsSlice";

export const PostsPage = () => {
  const {list, loading} = useSelector((state) => state.posts.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    if(!list) {
      dispatch(getPosts())
    }
  }, [list, dispatch])

  if(!list && loading) {
    return <Container>Loading...</Container>
  }

  if(!list) {
    return <div>404</div>
  }

  return (
  <Container>
    <SC.Title>Посты</SC.Title>
    <Posts posts={list} />
  </Container>
  )
}
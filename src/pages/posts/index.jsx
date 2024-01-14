import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/сontainer";
import { Posts } from "../../components/posts";
import * as SC from './styles'

export const PostsPage = () => {
  const posts = useSelector((state) => state.posts.list)
  return (
  <Container>
    <SC.Title>Посты</SC.Title>
    <Posts posts={posts} />
  </Container>
  )
}
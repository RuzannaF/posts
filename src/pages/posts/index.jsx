import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/сontainer";
import { Input } from "../../components/Input";
import { Posts } from "../../components/posts";
import * as SC from './styles';
import { getPosts } from "../../redux/slices/postsSlice";
import Pagination from "../../components/pagination";

const POSTS_PER_PAGE = 6

export const PostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  
  const {list, loading} = useSelector((state) => state.posts.posts)
  
  const dispatch = useDispatch()
  const lastIndex = (currentPage * POSTS_PER_PAGE)
  const firstIndex = lastIndex - POSTS_PER_PAGE
   

  const newTotalPage = () => {
    if (list) {
      const newTotal = Math.ceil(list.length/POSTS_PER_PAGE)
      setTotalPages(newTotal)
    }
  }
  useEffect(() => {
    if (!list) {
      dispatch(getPosts())
    } 
    newTotalPage()
  }, [list, dispatch, currentPage])

  const changeCurrentPage = (page) => {
    setCurrentPage(page)
  }

  if(!list && loading) {
    return <Container>Loading...</Container>
  }

  if(!list) {
    return <div>404</div>
  }

  return (
  <Container>
    <SC.Title>Посты</SC.Title>
    {list && <Posts posts={list.slice(firstIndex, lastIndex)} />}
    <Pagination totalPages={totalPages} currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
  </Container>
  )
}
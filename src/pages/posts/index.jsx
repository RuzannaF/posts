import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/сontainer";
import { Input } from "../../components/Input";
import { Posts } from "../../components/posts";
import * as SC from './styles';
import { getPosts } from "../../redux/slices/postsSlice";
import Pagination from "../../components/pagination";
import { Loader } from "../../components/Loader";

const POSTS_PER_PAGE = 6

export const PostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filterValue, setFilterValue] = useState('AZ')
  const [searchValue, setSearchValue] = useState('')


  const { list, loading } = useSelector((state) => state.posts.posts)

  const dispatch = useDispatch()
  const lastIndex = (currentPage * POSTS_PER_PAGE)
  const firstIndex = lastIndex - POSTS_PER_PAGE


  const newTotalPage = () => {
    if (list) {
      const newTotal = Math.ceil(list.length / POSTS_PER_PAGE)
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

  if (!list && loading) {
    return <Loader />
  }

  if (!list) {
    return <div>404</div>
  }

  const onFilterChange = (e) => {
    setFilterValue(e.target.value)
  }

  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredPosts = list.filter(post => {
    if (searchValue && !post.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return false
    }
    return true;
  }).sort((a, b) => {
    if (filterValue === 'AZ') {
      return a.title.localeCompare(b.title)
    } else {
      return b.title.localeCompare(a.title)
    }
  })

  return (
    <Container>
      <SC.Title>Посты</SC.Title>
      <Input
        placeholder='заголовок поста'
        value={searchValue}
        onChange={onSearchChange}
        type='text'
        name='title'
      />
      <select onChange={onFilterChange} value={filterValue}>
        <option value="AZ">От А до Z</option>
        <option value="ZA">От Z до A</option>
      </select>
      {filteredPosts && <Posts posts={filteredPosts.slice(firstIndex, lastIndex)} />}
      <Pagination totalPages={totalPages} currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
    </Container>
  )
}
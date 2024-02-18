import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/сontainer";
import { Input } from "../../components/Input";
import { Posts } from "../../components/posts";
import * as SC from './styles';
import { getPosts, getFilteredPosts } from "../../redux/slices/postsSlice";
import Pagination from "../../components/pagination";
import { Loader } from "../../components/Loader";
import { sortPosts } from "./sortPosts";
import { filterByUserId } from "./filterByUserId";


const POSTS_PER_PAGE = 6

export const PostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filterValue, setFilterValue] = useState('AZ')
  const [searchValue, setSearchValue] = useState('')
  const [sortedList, setSortedList] = useState([])
  const [userId, setUserId] = useState('')

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
    if (list) {
      let filteredList = list
      filteredList = filterByUserId(list, userId)
      console.log(filteredList)
      const sorted = sortPosts(filteredList, filterValue)
      setSortedList(sorted)
      newTotalPage()
    }
  }, [list, dispatch, currentPage, filterValue, userId])

  useEffect(() => {
    dispatch(getFilteredPosts(searchValue))
  }, [dispatch, searchValue])

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

  const onUserChange = (e) => {
    const value = e.target.value
    setUserId(value === '' ? '' : Number(value))
    console.log(userId)
  }
  
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
      <Input
        placeholder='UserId'
        value={userId}
        onChange={onUserChange}
        type='text'
        name='userId'
      />
      <select onChange={onFilterChange} value={filterValue}>
        <option value="AZ">От А до Z</option>
        <option value="ZA">От Z до A</option>
      </select>
      {sortedList && <Posts posts={sortedList.slice(firstIndex, lastIndex)} />}
      <Pagination totalPages={totalPages} currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
    </Container>
  )
}
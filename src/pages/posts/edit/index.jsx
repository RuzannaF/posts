import React, { useEffect } from "react";
import { PostForm } from "../components/PostForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPostByID } from "../../../redux/slices/postsSlice";

export const EditPost = () =>  {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { list } = useSelector((state) => state.posts.posts)
    const { post } = useSelector((state) => state.posts.postForView)
    const intId = Number(id)
    

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
    }

    if (!list) {
        return <div>Пост не найден</div>
    }

    const findedPost = post ? post : list.find((item) => item.id === intId)

    return (
        <PostForm title={`Редактирование поста ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPost} />
    ) 
}
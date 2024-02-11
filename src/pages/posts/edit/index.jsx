import React, { useState, useEffect } from "react";
import { PostForm } from "../components/PostForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../../redux/slices/postsSlice";

export const EditPost = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const mainState = useSelector((state) => state.posts)
    const { list } = mainState.posts
    const { post } = mainState.postForView
    const intId = Number(id)
    const [findedPost, setFindedPost] = useState(undefined)


    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
    }

    useEffect(() => {
        const foundPost = post ? post : list.find((item) => item.id === intId)
        setFindedPost(foundPost)
    }, [intId, list, post])

    if (!list) {
        return <div>Пост не найден</div>
    }

    return (
        <PostForm title={`Редактирование поста ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPost} />
    )
}
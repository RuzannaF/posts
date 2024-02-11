import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getPostByID, showPost, deletePost } from "../../../redux/slices/postsSlice";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/сontainer";
import * as SC from './styles'
import { Button } from "../../../ui/button";
import { Modal } from "../../../ui/modal";
import { Loader } from "../../../components/Loader";
import image from '../../../images/today-trainee.jpg';

export const DetailPost = () => {
    const { user } = useSelector((state) => state.auth)
    const { id } = useParams()
    const mainState = useSelector((state) => state.posts)
    const { list } = mainState.posts
    const postForView = mainState.postForView
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const intId = Number(id)
    const [findedPost, setFindedPost] = useState(undefined)
    const [selectPost, setSelectPost] = useState(null)

    const onDeletePost = () => {
        dispatch(deletePost(selectPost))
        setSelectPost(null)
        navigate('/posts')
    }

    useEffect(() => {
        if (findedPost) {
            dispatch(showPost(findedPost))
        } else {
            dispatch(getPostByID(Number(intId)))
        }
    }, [id, list, dispatch])

    useEffect(() => {
        setFindedPost(list ? list.find((item) => item.id === intId) : undefined)
      }, [intId, list])

    if (postForView.loading) {
        return <Loader />
    }

    const post = postForView ? postForView.post : null

    if (!postForView || !post) {
        return <div>Пост не найден</div>
    }
    return (
        <Container>
            {selectPost && <Modal text={`Вы уверены, что хотите удалить пост ${id}?`} setSelectPost={setSelectPost} onClick={onDeletePost} />}
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <SC.BacklLink to={'/posts'}>Обратно к публикациям</SC.BacklLink>
                {list && user && <SC.BacklLink to={`/post/${id}/edit`}>Редактировать</SC.BacklLink>}
                {list && user && <Button className={'attention'} onClick={() => setSelectPost(post)}>Удалить</Button>}
            </SC.LinkWrapper>
        </Container>
    )
} 
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getPostByID, showPost } from "../../../redux/slices/postsSlice";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/сontainer";
import * as SC from './styles'

export const DetailPost = () => {
    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()
    const intId = Number(id)
    const findedPost = list ? list.find((item) => item.id === intId) : undefined
    
    useEffect(() => {
        if (findedPost) {
            dispatch(showPost(findedPost))
        } else {
            dispatch(getPostByID(Number(intId)))
        }
    }, [id, list, dispatch])

    if (postForView.loading) {
        return <Container>Loading...</Container>
    }

    const post = postForView ? postForView.post : null

    if (!postForView || !post) {
      return <div>Пост не найден</div>
    }
    const image = post.image || 'https://www.reclamare.ua/wp-content/uploads/2015/10/today-trainee-tomorrow.jpg'
    return (
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <SC.BacklLink to={'/posts'}>Обратно к публикациям</SC.BacklLink>
                <SC.BacklLink to={`/post/${id}/edit`}>Редактировать</SC.BacklLink>
            </SC.LinkWrapper>
        </Container>
    )
} 
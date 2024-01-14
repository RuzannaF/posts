import React, { useEffect } from "react";
import { useMemo } from "react";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../../redux/slices/postsSlice";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/сontainer";
import * as SC from './styles'

export const DetailPost = () => {
    const { id } = useParams()
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPost(Number(id)))
    }, [id])

    if (!postForView) {
        return <div>Пост не найден</div>
    }
    return (
        <Container>
            <Typo>{postForView.title}</Typo>
            <SC.Image src={postForView.image} alt={postForView.title} />
            <SC.Text>{postForView.text}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <SC.BacklLink to={'/posts'}>Обратно к публикациям</SC.BacklLink>
            </SC.LinkWrapper>
        </Container>
    )
} 
import React from "react";
import { useMemo } from "react";
import { useParams } from 'react-router-dom'
import { INITIAL_POST } from "..";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/сontainer";
import * as SC from './styles'

export const DetailPost = () => {
    const { id } = useParams()
    const currentPost = useMemo(() =>
        INITIAL_POST.find((item) => item.id === Number(id)), [id])

    if (!currentPost) {
        return <div>Пост не найден</div>
    }
    return (
        <Container>
            <Typo>{currentPost.title}</Typo>
            <SC.Image src={currentPost.image} alt={currentPost.title} />
            <SC.Text>{currentPost.text}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <SC.BacklLink to={'/posts'}>Обратно к публикациям</SC.BacklLink>
            </SC.LinkWrapper>
        </Container>
    )
} 
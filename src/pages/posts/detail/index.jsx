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

export const DetailPost = () => {
    const { user } = useSelector((state) => state.auth)
    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const intId = Number(id)
    const findedPost = list ? list.find((item) => item.id === intId) : undefined
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

    if (postForView.loading) {
        return <Loader />
    }

    const post = postForView ? postForView.post : null

    if (!postForView || !post) {
      return <div>Пост не найден</div>
    }
    const image = post.image || 'https://www.reclamare.ua/wp-content/uploads/2015/10/today-trainee-tomorrow.jpg'
    return (
        <Container>
            {selectPost && <Modal text={`Вы уверены, что хотите удалить пост ${id}?`} setSelectPost={setSelectPost} onClick={onDeletePost}/>}
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
import React from 'react'
import * as SC from './styles'

export const Post = ({post}) => {
    const image = post.image || 'https://www.reclamare.ua/wp-content/uploads/2015/10/today-trainee-tomorrow.jpg'
    return (
    <SC.Post>
        <SC.Image src={image} alt={post.title}/>
        <SC.Title>{post.title}</SC.Title>
        <SC.DetailLink to={`/posts/${post.id}`}>Читать далее</SC.DetailLink>
    </SC.Post>
)}
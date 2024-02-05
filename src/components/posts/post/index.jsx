import React from 'react'
import image from '../../../images/today-trainee.jpg';
import * as SC from './styles'

export const Post = ({post}) => {
    return (
    <SC.Post>
        <SC.Image src={image} alt={post.title}/>
        <SC.Title>{post.title}</SC.Title>
        <SC.DetailLink to={`/posts/${post.id}`}>Читать далее</SC.DetailLink>
    </SC.Post>
)}
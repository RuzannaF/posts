import React from 'react';
import { Posts } from '../../components/posts';
import { Container } from '../../components/сontainer';
import * as SC from './styles'

const INITIAL_POST = [
    {
      id: 1,
      title: '1 post',
      image: 'https://www.reclamare.ua/wp-content/uploads/2015/10/today-trainee-tomorrow.jpg'
    },
    {
      id: 2,
      title: '2 post',
      image: 'https://habrastorage.org/r/w1560/webt/s7/gh/43/s7gh43i88dmawmqioyllqf4ho5q.png'
    },
    {
      id: 3,
      title: '3 post',
      image: 'https://blog.skillfactory.ru/wp-content/uploads/2023/02/frontend-2-2058753.jpg'
    },
  ]

export const MainPage = () => (
    <Container>
      <SC.Title>Свежие публикации</SC.Title>
      <Posts posts={INITIAL_POST} />
    </Container>
)
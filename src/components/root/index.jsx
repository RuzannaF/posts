import React from "react";
import { Outlet } from 'react-router-dom';
import { Menu, MenuItem } from './styles'
import { Container } from "../сontainer";

export const Root = () => <>
<Container>
<Menu>
   <MenuItem to={'/'}>Главная</MenuItem>
   <MenuItem to={'posts'}>Список постов</MenuItem>
   <MenuItem to={'posts/add'}>Добавление поста</MenuItem>
   <MenuItem to={'auth'}>Авторизация</MenuItem>
   <MenuItem to={'registration'}>Регистрация</MenuItem>
</Menu>
</Container>
<Outlet />
</>
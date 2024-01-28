import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from './styles'
import { Container } from "../сontainer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../ui/button";
import { logout } from "../../redux/slices/authSlice";

export const Root = () => {
   const { user } = useSelector((state) => state.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const exitButton = () => {
      dispatch(logout())
      navigate('/')
   }
   return (
      <>
         <Container>
            <Menu>
               <MenuItem to={'/'}>Главная</MenuItem>
               <MenuItem to={'posts'}>Список постов</MenuItem>
               {user && <MenuItem to={'posts/add'}>Добавление поста</MenuItem>}
               {!user &&<MenuItem to={'auth'}>Авторизация</MenuItem>}
               {!user &&<MenuItem to={'registration'}>Регистрация</MenuItem>}
               {user && <Button className={'regular'} onClick={exitButton}>Выход</Button>}
            </Menu>
         </Container>
         <Outlet />
      </>
   )
} 
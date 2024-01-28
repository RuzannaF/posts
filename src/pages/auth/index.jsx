import React, { useState } from "react";
import { Form } from "../../components/Form";
import { Typo } from "../../components/Typo";
import { Input } from "../../components/Input";
import { Button } from "../../ui/button";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router";

export const AuthPage = () => {
    const [formValues, setFormValues] = useState({ email:'', password:''})
    const disabled = !formValues.email || !formValues.password
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()
        try {
            const users = JSON.parse(localStorage.getItem('users'))

            if(!users) {
                alert('Пользователь не найден в системе')
                return
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)
            
            if(!currentUser) {
                alert('Пользователя не существует')
                return 
            }

            dispatch(login(currentUser))
            navigate('/posts')
            
        } catch (e) {
            console.log(e)
        }
    }
    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }
    
    return (
        <Form onSubmit={onSubmit}>
            <Typo>Авторизация</Typo>
            <Input 
                type='email'
                name='email'
                placeholder='Email'
                value={formValues.email}
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <Input 
                type='password'
                name='password'
                placeholder='Пароль'
                value={formValues.password}
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <Button type='submit' disabled={disabled}>Авторизация</Button>
        </Form>
    )
}
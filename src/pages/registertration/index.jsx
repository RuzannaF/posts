import React, { useState } from "react";
import { Typo } from "../../components/Typo";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../ui/button";

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({name:'', surname:'', email:'', password:''})
    const userId = Date.now()
    const onSubmit = (e) => {
        e.preventDefault()
        try {
            const users = JSON.parse(localStorage.getItem('users'))
            if (!users) {
                localStorage.setItem('users', JSON.stringify([{id: userId, ...formValues}]))
                return
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert('Пользователь с таким email уже существует')
                return
            }

            users.push({id: userId, ...formValues})

            localStorage.setItem('users', JSON.stringify(users))
           
        } catch(e) {
            console.log(e)
        }
    }

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    return (
        <Form onSubmit={onSubmit}>
            <Typo>Регистрация</Typo>
            <Input 
                type='text'
                name='name'
                placeholder='Имя'
                value={formValues.name}
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <Input 
                type='text'
                name='surname'
                placeholder='Фамилия'
                value={formValues.surname}
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
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
            <Button type='submit'>Регистрация</Button>
        </Form>
    )
}
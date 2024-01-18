import React, { useState } from 'react'
import { Container } from '../../../../components/сontainer'
import { Typo } from '../../../../components/Typo'
import * as SC from './styles'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../../redux/slices/postsSlice'

const DEFAULT_VALUES = {title: '', body: ''}

export const PostForm = () => {

    const dispatch = useDispatch()


    const [formValues, setFormValues] = useState(DEFAULT_VALUES)

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(formValues))
        setFormValues(DEFAULT_VALUES)
    }

    const disabled = !formValues.title || !formValues.body

    return (
        <Container>
            <SC.Form onSubmit={onSubmit}>
                <Typo>Добавление нового поста</Typo>
                <SC.Field>
                    <SC.Input
                        type='text'
                        name='title'
                        value={formValues.title}
                        placeholder='заголовок'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </SC.Field>
                <SC.Field>
                    <SC.Textarea
                        name='body'
                        placeholder='текст'
                        value={formValues.body}
                        rows={10}
                        cols={30}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </SC.Field>
                <SC.Button type='submit' disabled={disabled}>Сохранить</SC.Button>
            </SC.Form>
        </Container>
    )
}
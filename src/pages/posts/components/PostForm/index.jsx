import React, { useState } from 'react'
import { Container } from '../../../../components/сontainer'
import { Typo } from '../../../../components/Typo'
import * as SC from './styles'
import { Form } from '../../../../components/Form'
import { Button } from '../../../../ui/button'


const DEFAULT_VALUES = { title: '', body: '' }

export const PostForm = ({ title, onSubmitForm, defaultValues }) => {

    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES)

    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(formValues)
        !defaultValues && setFormValues(DEFAULT_VALUES)
    }

    const disabled = !formValues.title || !formValues.body

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Typo>{title}</Typo>
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
                <Button type='submit' disabled={disabled} className={'regular'}>Сохранить</Button>
            </Form>
        </Container>
    )
}
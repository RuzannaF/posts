import styled from 'styled-components'

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 15px
    max-width: 250px;
    margin: 30px auto;
`

export const Field = styled.div `

`
export const Input = styled.input `
    width: 100%;
`

export const Textarea = styled.textarea `
    resize: none;
    width: 100%
`
export const Button = styled.button `
    border: none;
    background: add8e6;
    padding: 10px 0px;
    border-size: border-box;
    border-radius: 10px;
    cursor: pointer

    &hover: {
        background: a6dced;
    }

    &disabled: {
        opacity: 0.5
    }
`
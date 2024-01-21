import React from 'react'
import { Button } from '../button'
import * as SC from './styles'
import { Container } from '../../components/сontainer'

export const Modal = ({ text, onClick, setSelectPost }) => {

    return (
        <SC.ModalWrapper>
            <SC.Modal>
                <SC.ModalText>{text}</SC.ModalText>
                <SC.ButtonWrapper>
                    <Button buttonClassName={'attention'} onClick={onClick}>Да</Button>
                    <Button buttonClassName={'regular'} onClick={() => setSelectPost(null)}>Нет</Button>
                </SC.ButtonWrapper>
            </SC.Modal>
        </SC.ModalWrapper>
    )
}
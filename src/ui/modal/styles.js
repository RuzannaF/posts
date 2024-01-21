import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const Modal = styled.div `
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: white;
    color: black;
    border: 1px solid white;
    width: 500px;
    padding: 15px;
`

export const ModalText = styled.div `
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: black;
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
`
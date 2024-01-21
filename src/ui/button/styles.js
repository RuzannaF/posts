import styled from 'styled-components';

export const Button = styled.button`
    padding: 8px;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid black;

    &.regular {
        background: #ffffff;

        &:hover {
            background: #e9e9e9;
        }

        &:disabled {
            opacity: 0.5;
        }
    }

    &.attention {
        background: white;
        color: black;

        &:hover {
            background: red;
            color: white;
            border: 1px solid red;
        }
    }
`
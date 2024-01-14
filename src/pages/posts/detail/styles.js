import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin-right: 15px;
`

export const Text = styled.div`
    font-size: 15px;
`

export const LinkWrapper = styled.div`
    text-align: center;
    margin-top: 15px;
`

export const BacklLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover {
        color: blue;
        text-decoration: underline;
    }
`
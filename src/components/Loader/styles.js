import styled, { keyframes } from 'styled-components'

export const loaderAnimation = keyframes`
  0% {
    content: 'Loading';
  }
  25% {
    content: 'Loading.';
  }
  50% {
    content: 'Loading..';
  }
  75% {
    content: 'Loading...';
  }
  100% {
    content: 'Loading';
  }
`

export const Loader = styled.div`
  font-size: 40px;
  text-align: center;
  margin: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:before {
    content: 'Loading';
    display: inline-block;
    animation: ${loaderAnimation} 1s linear infinite;
  }
`
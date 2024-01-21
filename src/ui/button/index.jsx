import React from 'react'
import * as SC from './styles'

export const Button = ({ children, buttonClassName, onClick }) => {
    return (
      <SC.Button className={buttonClassName} onClick={onClick}>
        {children}
      </SC.Button>
    )
  }
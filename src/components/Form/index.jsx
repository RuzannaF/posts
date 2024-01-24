import React from 'react'
import * as SC from './styles'

export const Form = ({children, ...rest}) => {
    return <SC.Form {...rest}>{children}</SC.Form>
}
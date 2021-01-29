import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react'

export const Button = (props) => {

    const Button = styled.button`
    color : fff;
    background-color : ${props.color};
    margin : 5px;
    `

    return (
        <>
            <Button >{props.title}</Button>
        </>
    )
}

export const ButtonTwo = (props) => {

    const Button = styled.button`
    color : fff;
    background-color : ${props.color};
    margin : 5px;
    `

    return (
        <>
            <Button>{props.title}</Button>
        </>
    )
}


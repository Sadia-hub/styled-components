import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './styles/GlobalStyles'
function Hero() {
    const color = "red"

const theme = {
    color:{
        text:"white"
    },

    responsive:{
        mobile:"768px"
    }
}

const Button = styled.button`
    border:2px solid black;
    padding:20px;
    background:${({bg})=>bg};
    color:${({theme})=>theme.color.text};
    border-radius:10px;
    margin:100px;
    font-size:30px;

    &:hover{
        color:black;
        background:white;
    }

    span{
        color:${color};
        &:hover{
            color:blue;
        }
    }

    @media (max-width:${({theme})=>theme.responsive.mobile}){
        background:white;
        color:black
    }

`


  return (
        <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Button bg="black">Hello World<span> I am span</span> </Button>
        </ThemeProvider>   
  )
}

export default Hero
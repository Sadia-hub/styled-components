import React from 'react'
import styled from 'styled-components'

const color = "red"

const Button = styled.button`
    border:2px solid black;
    padding:20px;
    background:${({bg})=>bg};
    color:white;
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

`
function Hero() {

  return (
        <div>

                <Button bg="black">Hello World<span> I am span</span> </Button>
        </div>   
  )
}

export default Hero
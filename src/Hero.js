import React from 'react'
import styled from 'styled-components'

const color = "red"

const Button = styled.button`
    border:2px solid black;
    padding:20px;
    background:black;
    color:white;
    border-radius:10px;

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

                <Button>Hello World<span> I am span</span> </Button>
        </div>   
  )
}

export default Hero
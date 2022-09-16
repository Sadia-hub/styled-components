import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`

.btn {
    background:black;
    color:white;
    padding:20px;
}
`
function Hero() {

  return (
    <Wrapper>
            <button className='btn'>Hello World</button>
    </Wrapper>
  )
}

export default Hero
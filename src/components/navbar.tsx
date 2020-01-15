import React from 'react'
import styled from 'styled-components'

import Black1x from '../images/black.png'
import Black2x from '../images/black@2x.png'
import Black3x from '../images/black@3x.png'

const Logo = styled.div`
  border-radius: 50%;
`

export const Navbar: React.FC = () => {
  return <div>
    <Logo>
    <img 
      src={Black1x}
      srcSet={`${Black2x}, ${Black3x}`}
      alt="selfin logo" />
    </Logo>
  </div>
}
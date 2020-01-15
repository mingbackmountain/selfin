import {createGlobalStyle} from 'styled-components'

import fontFace from '../fonts/index'

export const GlobalStyle = createGlobalStyle`
  ${fontFace}

  html, body {
    margin: 0;
    font-family: 'SukhumvitSet', Arial, Helvetica, sans-serif;
  }
`
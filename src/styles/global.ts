import {createGlobalStyle} from 'styled-components'

import fontFace from '../fonts/index'

export const GlobalStyle = createGlobalStyle`
  ${fontFace}

  body {
    margin: 0;
  }
`
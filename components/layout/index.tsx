import { Global } from "@emotion/core"

import { Navbar } from "../navbar"
import { Footer } from "../footer"
import { GlobalStyle } from "../../styles/global"

import { CSSProps } from "./types"

export const Layout: React.FC<CSSProps> = props => {
  return (
    <div css={props.style}>
      <Navbar />

      {props.children}

      <Footer />

      <Global styles={GlobalStyle} />
    </div>
  )
}

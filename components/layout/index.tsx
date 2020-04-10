import { Global } from "@emotion/core"

import { Navbar } from "../navbar"
import { Footer } from "../footer"
import { GlobalStyle } from "../../styles/global"

import { LayoutProps } from "./types"

export const Layout: React.FC<LayoutProps> = props => {
  return (
    <div style={props.style}>
      <Navbar />

      {props.children}

      <Footer />

      <Global styles={GlobalStyle} />
    </div>
  )
}

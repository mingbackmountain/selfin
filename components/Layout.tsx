import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { GlobalStyle } from "../styles/global"

export const Layout: React.FC = props => {
  return (
    <>
      <Navbar />

      {props.children}

      <Footer />

      <GlobalStyle />
    </>
  )
}

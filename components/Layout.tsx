import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
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

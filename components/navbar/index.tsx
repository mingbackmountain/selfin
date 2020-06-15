import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { Logo } from "./logo"
import { NavbarItem } from "./item"

import { NavbarContainer, NavItem } from "./styles/navbar"

import { useOpenState } from "../../utils/hooks-open-state"

export const Navbar: React.FC = () => {
  const { isOpen, setOpenState } = useOpenState()

  const setSmooth = () => {
    console.log("hello")
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <NavbarContainer>
      <div>
        <Logo />
        <div className="hamburger" onClick={() => setOpenState(!isOpen)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <NavItem isOpen={isOpen}>
          <NavbarItem href="/" linkName="หน้าแรก" />
          <NavbarItem href="/#footer" linkName="ติดต่อเรา" />
        </NavItem>
      </div>
    </NavbarContainer>
  )
}

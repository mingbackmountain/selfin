import { Logo } from "./NavbarLogo"

import { Container } from "../styles/container"
import { NavbarContainer, NavItem, LoginButton } from "../styles/navbar"
import { NavbarItem } from "./NavbarItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import { useOpenState } from "../utils/hooks-open-state"

export const Navbar: React.FC = () => {
  const { isOpen, setOpenState } = useOpenState()

  return (
    <NavbarContainer>
      <Container>
        <div>
          <Logo />
          <div className="hamburger" onClick={() => setOpenState(!isOpen)}>
            <img src="/images/fa-bars.svg" alt="hamburger" />
          </div>
          <NavItem isOpen={!isOpen}>
            <NavbarItem href="/" linkName="หน้าแรก" />
            <NavbarItem href="/" linkName="โปร์ไฟล์" />
            <NavbarItem href="/" linkName="กิจกรรม" />
            <NavbarItem href="/" linkName="ติดต่อเรา" />
          </NavItem>
        </div>
        <LoginButton>
          <FontAwesomeIcon icon={faUser} color="#ffc626" size="2x" />
        </LoginButton>
      </Container>
    </NavbarContainer>
  )
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons"

import { Logo } from "./logo"
import { NavbarItem } from "./item"

import { PagePadding } from "../../styles/container"
import { NavbarContainer, NavItem, LoginButton } from "./styles/navbar"

import { useOpenState } from "../../utils/hooks-open-state"

export const Navbar: React.FC = () => {
  const { isOpen, setOpenState } = useOpenState()

  return (
    <NavbarContainer css={PagePadding()}>
      <div>
        <Logo />
        <div className="hamburger" onClick={() => setOpenState(!isOpen)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <NavItem isOpen={isOpen}>
          <NavbarItem href="/" linkName="หน้าแรก" />
          <NavbarItem href="/" linkName="โปร์ไฟล์" />
          <NavbarItem href="/" linkName="กิจกรรม" />
          <NavbarItem href="/" linkName="ติดต่อเรา" />
          <LoginButton>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </LoginButton>
        </NavItem>
      </div>
    </NavbarContainer>
  )
}

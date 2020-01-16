import React, { useContext } from "react"

import { Logo } from "./NavbarLogo"

import { Container } from "../styles/container"
import { NavbarContainer, NavItem, NavLink, AuthButton } from "../styles/navbar"

import { asset } from "../contexts/asset"

import { useOpenState } from "../utils/hooks-open-state"

export const Navbar: React.FC = () => {
  const { faBars } = useContext(asset)
  const { isOpen, setOpenState } = useOpenState()

  return (
    <NavbarContainer>
      <Container>
        <Logo />
        <div className="hamburger" onClick={() => setOpenState(!isOpen)}>
          <img src={faBars} alt="hamburger" />
        </div>
        <NavItem isOpen={isOpen}>
          <NavLink to="/">หน้าแรก</NavLink>
          <NavLink to="/">โปร์ไฟล์</NavLink>
          <NavLink to="/">กิจกรรม</NavLink>
          <NavLink to="/">ติดต่อเรา</NavLink>
          <AuthButton isLogin={true} to="/">
            เข้าสู่ระบบ
          </AuthButton>
          <AuthButton isLogin={false} to="/">
            ลงทะเบียน
          </AuthButton>
        </NavItem>
      </Container>
    </NavbarContainer>
  )
}

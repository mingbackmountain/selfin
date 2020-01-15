import React from "react"

import { Logo } from "./NavbarLogo"

import { Container } from "../styles/container"
import { NavbarContainer, NavItem, NavLink, AuthButton } from "../styles/navbar"

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Container>
        <Logo />
        <NavItem>
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

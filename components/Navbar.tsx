import Link from "next/link"

import { Logo } from "./NavbarLogo"

import { Container } from "../styles/container"
import { NavbarContainer, NavItem, NavLink, AuthButton } from "../styles/navbar"

import { useOpenState } from "../utils/hooks-open-state"

export const Navbar: React.FC = () => {
  const { isOpen } = useOpenState()

  return (
    <NavbarContainer>
      <Container>
        <Logo />
        {/* <div className="hamburger" onClick={() => setOpenState(!isOpen)}>
          <img src={faBars} alt="hamburger" />
        </div> */}
        <NavItem isOpen={!isOpen}>
          <Link href="/">
            <NavLink>หน้าแรก</NavLink>
          </Link>
          <Link href="/">
            <NavLink>โปร์ไฟล์</NavLink>
          </Link>
          <Link href="/">
            <NavLink>กิจกรรม</NavLink>
          </Link>
          <Link href="/">
            <NavLink>ติดต่อเรา</NavLink>
          </Link>
          <Link href="/">
            <AuthButton isLogin={true}>เข้าสู่ระบบ</AuthButton>
          </Link>
          <Link href="/">
            <AuthButton isLogin={false}>ลงทะเบียน</AuthButton>
          </Link>
        </NavItem>
      </Container>
    </NavbarContainer>
  )
}

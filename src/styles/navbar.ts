import styled from "styled-components"
import { Link } from "react-router-dom"

import { AuthButtonProps } from "../interfaces/navbar"

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`

export const LogoContainer = styled.div`
  border-radius: 50%;
  width: 125px;
  height: 125px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  margin-left: 60px;
  transform: translateY(20%);

  > img {
    width: 80%;
  }
`

export const NavItem = styled.div`
  font-family: "Mitr", Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin: 27px 0;
`

export const NavLink = styled(Link)`
  color: #461313;
  text-decoration: none;
  margin: 0 calc(45px / 2);
  font-weight: lighter;
`

export const AuthButton = styled(Link)`
  color: white;
  text-decoration: none;
  border-radius: 20px;
  background-color: ${(props: AuthButtonProps) =>
    props.isLogin ? `#50bf8a` : `#f23318`};
  padding: 5px 20px;
  margin: 0 calc(30px / 2);
`

import styled from "styled-components"
import { Link } from "react-router-dom"

import { AuthButtonProps, NavItemOpenProps } from "../interfaces/navbar"

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 1;
  background: white;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: wrap;
  }

  .hamburger {
    width: 30px;
    display: flex;
    align-items: center;

    > img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 0;

    .hamburger {
      display: none;
    }
  }
`

export const LogoContainer = styled.div`
  flex: 0 1 40%;

  > img {
    width: 100%;
    max-width: 100px;
  }

  @media screen and (min-width: 1200px) {
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
    transform: translateY(40%);
    background: white;
    z-index: 1;

    > img {
      width: 80%;
    }
  }
`

export const NavItem = styled.div<NavItemOpenProps>`
  font-family: "Mitr", Arial, Helvetica, sans-serif;
  font-size: 20px;
  flex: 0 1 100%;
  flex-flow: column;
  align-items: center;
  display: ${props => (props.isOpen ? "flex" : "none")};

  @media screen and (min-width: 1200px) {
    margin: 27px 0;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
  }
`

export const NavLink = styled(Link)`
  color: #461313;
  text-decoration: none;
  margin: 5px calc(45px / 2);
  font-weight: lighter;
  text-align: center;
`

export const AuthButton = styled(Link)`
  color: white;
  text-decoration: none;
  border-radius: 20px;
  background-color: ${(props: AuthButtonProps) =>
    props.isLogin ? `#50bf8a` : `#f23318`};
  padding: 5px 20px;
  margin: 5px 0;
  text-align: center;

  @media screen and (min-width: 1200px) {
    margin: 0 calc(30px / 2);
  }
`

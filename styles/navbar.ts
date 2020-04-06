import styled from "styled-components"

import { AuthButtonProps, NavItemOpenProps } from "../types/navbar"

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 84px;
  padding: 10px 0;
  z-index: 2;
  background: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  > div,
  > div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: wrap;
    height: inherit;
  }

  .hamburger {
    width: 30px;
    display: flex;
    align-items: center;

    > img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1100px) {
    padding: 0;

    .hamburger {
      display: none;
    }
  }
`

export const LogoContainer = styled.div`
  > img {
    width: 100%;
    max-width: 100px;
  }

  @media screen and (min-width: 1100px) {
    width: 84px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    z-index: 1;

    > img {
      width: 80%;
    }
  }
`

export const NavItem = styled.div<NavItemOpenProps>`
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 18px;
  flex-flow: column;
  align-items: center;
  display: ${props => (props.isOpen ? "flex" : "none")};

  @media screen and (min-width: 1100px) {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
  }
`

export const NavLink = styled.a`
  color: #461313;
  text-decoration: none;
  margin: 5px calc(45px / 2);
  font-weight: lighter;
  text-align: center;
`

export const LoginButton = styled.a`
  width: 32px;
  height: 32px;

  > img {
    width: 100%;
    color: #ffc626;
  }
`

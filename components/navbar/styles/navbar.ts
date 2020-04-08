import styled from "styled-components"

import { NavItemOpenProps } from "../types"

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

  > div {
    display: flex;
    align-items: center;
    flex-flow: wrap;
    height: inherit;
    flex: 0 1 10%;
  }

  .hamburger {
    flex: 0 1 50%;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > img {
      width: 100%;
    }
  }

  @media screen and (min-width: 769px) {
    padding: 0;

    .hamburger {
      flex: 0 1 50%;
      display: none;
    }
  }
`

export const LogoContainer = styled.div`
  flex: 0 1 50%;

  > img {
    width: 100%;
    max-width: 100px;
  }

  @media screen and (min-width: 769px) {
    flex: 0 1 auto;
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
  flex: 0 1 100%;
  align-items: center;
  width: auto;
  display: ${props => (props.isOpen ? "flex" : "none")};

  @media screen and (min-width: 769px) {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    flex: 0 1 90%;
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
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    color: #ffc626;
  }

  @media screen and (min-width: 769px) {
  }
`

import styled from "@emotion/styled"

import { NavItemOpenProps } from "../types"

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 84px;
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
    padding-right: 20px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #ffba00;

    > img {
      width: 100%;
    }
  }

  @media screen and (min-width: 426px) {
    .hamburger {
      padding-right: 40px;
    }
  }

  @media screen and (min-width: 769px) {
    padding: 0 60px;

    > div {
      flex-flow: nowrap;
    }

    .hamburger {
      padding-right: 0;
      flex: 0 1 50%;
      display: none;
    }
  }

  @media screen and (min-width: 1441px) {
    padding: 0 120px;
  }
`

export const LogoContainer = styled.div`
  flex: 0 1 50%;
  padding-left: 20px;
  height: inherit;
  display: flex;
  align-items: center;

  > img {
    max-width: 100px;
  }

  @media screen and (min-width: 426px) {
    padding-left: 40px;
  }

  @media screen and (min-width: 769px) {
    padding-left: 0;
    flex: 0 1 auto;
    width: 84px;
    height: auto;
    justify-content: center;
    background: white;
    z-index: 1;

    > img {
      width: 100%;
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
  display: ${props => (props.isOpen ? "flex" : "none")};
  background-color: #ffba00;
  padding: 25px 0;

  @media screen and (min-width: 769px) {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    flex: 0 1 90%;
    background-color: #fff;
    width: auto;
    padding: 0;
  }
`

export const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: lighter;
  text-align: center;
  width: 100px;
  padding: 15px 0;
  font-size: 20px;
  cursor: pointer;

  /* This nth-child create border bottom except last one */
  @media screen and (max-width: 768px) {
    &:nth-child(-n + 1) {
      border: none;
    }

    &:nth-last-child(n + 3) {
      border-bottom: 1px solid;
    }
  }

  @media screen and (min-width: 769px) {
    font-size: 16px;
    padding: 0;
    margin: 5px 20px;
    width: auto;
  }

  @media screen and (min-width: 1025px) {
    margin: 5px calc(45px / 2);
  }
`

export const LoginButton = styled.a`
  width: 32px;
  height: 32px;
  margin: 0 0 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; */
  display: none;

  svg {
    color: #ffba00;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

import styled from "styled-components"

import { SlideButtonProps } from "../interfaces/banner"

export const BannerContainer = styled.div`
  margin-top: 78px;
  position: relative;

  > .banner {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 98px;
  }
`

export const Text = styled.div`
  font-family: "KBPlanetEarth", Arial, Helvetica, sans-serif;
  color: white;
  text-transform: uppercase;
  position: absolute;
  bottom: 50%;
  left: 0;
  transform: translate(50%, 50%);

  @media screen and (min-width: 600px) {
    font-size: 32px;
  }

  @media screen and (min-width: 900px) {
    font-size: 64px;
  }
`

export const SlideButton = styled.img<SlideButtonProps>`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: ${props => (props.isLeft ? "0" : "auto")};
  right: ${props => (!props.isLeft ? "0" : "auto")};
  transform: translate(${props => (props.isLeft ? "50%" : "-50%")}, -50%);

  @media screen and (min-width: 600px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 900px) {
    width: 86px;
    height: 86px;
  }
`

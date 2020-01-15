import styled from "styled-components"

import { SlideButtonProps } from "../interfaces/banner"

export const BannerContainer = styled.div`
  position: relative;

  > .banner {
    width: 100%;
  }
`

export const Text = styled.div`
  font-family: "KBPlanetEarth", Arial, Helvetica, sans-serif;
  color: white;
  font-size: 64px;
  text-transform: uppercase;
  position: absolute;
  bottom: 50%;
  left: 0;
  transform: translate(50%, 50%);
`

export const SlideButton = styled.img<SlideButtonProps>`
  position: absolute;
  width: 86px;
  height: 86px;
  top: 50%;
  left: ${props => (props.isLeft ? "0" : "auto")};
  right: ${props => (!props.isLeft ? "0" : "auto")};
  transform: translate(${props => (props.isLeft ? "50%" : "-50%")}, -50%);
`

import styled from "@emotion/styled"

import { SlideButtonProps } from "../types"

export const BannerContainer = styled.div`
  margin-top: 8px;
  position: relative;
  margin-top: 84px;

  > div {
    position: absolute;
    top: 65px;
    left: 10px;
    padding: 5px;
    width: 230px;
    font-size: 13px;
    background: #ffba00;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 426px) {
      top: 100px;
      left: 30px;
      font-size: 20px;
      width: 380px;
      padding: 10px;
    }
  }

  > .banner {
    width: 100%;
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

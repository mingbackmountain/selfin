import styled from "@emotion/styled"

import { InfoContainerProps } from "../types"
import { TextCardProps } from "../types"

export const InfoContainer = styled.div<InfoContainerProps>`
  ${props =>
    props.usingBackground
      ? `background: url("/images/kid.png") center center;
    background-size: cover;`
      : `background: #f7f7f7;`}
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  .title {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin-bottom: 0;

    @media screen and (min-width: 426px) {
      font-size: 20px;
    }

    @media screen and (min-width: 729px) {
      font-size: 28px;
    }

    @media screen and (min-width: 1441px) {
      font-size: 32px;
    }
  }
`

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 10px 10px;

  @media only screen and (min-width: 480px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 479px) {
    margin-top: 20px;
    justify-content: flex-start;
    white-space: nowrap;
    overflow: auto;
  }
`

export const TextLable = styled.p`
  display: block;
  color: white;
  background: #eb3d24;
  text-align: center;
  padding: 10px;
  border-radius: 25px;
  width: 100px;
  height: 40px;
`

export const TextSection = styled.div<TextCardProps>`
  ${props => `background: ${props.backgroundColor};`}
  width:100%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  > h1 {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    color: white;
  }

  > p {
    font-size: 14px;
    color: white;
  }

  @media screen and (min-width: 769px) {
    > h1 {
      font-size: 24px;
    }

    > p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1441px) {
    > h1 {
      font-size: 32px;
    }

    > p {
      font-size: 18px;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.5);

  > img {
    margin: 50px;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 340px) {
    > img {
      width: 110px;
      height: 110px;
    }
    width: 70%;
    margin-right: 15px;
  }

  @media screen and (min-width: 426px) {
    > img {
      width: 110px;
      height: 110px;
    }
    width: 70%;
    margin-right: 15px;
  }

  @media screen and (min-width: 769px) {
    > img {
      width: 110px;
      height: 110px;
    }
    width: 21%;
  }

  @media screen and (min-width: 1441px) {
    > img {
      width: 220px;
      height: 220px;
    }
    width: 21%;
  }
`

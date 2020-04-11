import styled from "@emotion/styled"

import { InfoContainerProps } from "../types"

export const InfoContainer = styled.div<InfoContainerProps>`
  ${props =>
    props.usingBackground
      ? `background: url("/images/kid.png") center center;
    background-size: cover;`
      : `background: #fff;`}
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  h1 {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }

  @media screen and (min-width: 769px) {
    h1 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1025px) {
    h1 {
      font-size: 32px;
    }
  }
`

export const WrapContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 20px;
  margin-top: 20px;

  @media screen and (min-width: 769px) {
    margin-top: 50px;
    padding: 0 60px;
    grid-gap: 120px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  > img {
    width: 50px;
    height: 50px;
  }

  > h1 {
    margin-bottom: 0px;
  }

  > p {
    font-size: 14px;
  }

  @media screen and (min-width: 769px) {
    > img {
      width: 110px;
      height: 110px;
    }

    > p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1025px) {
    > img {
      width: 220px;
      height: 220px;
    }

    > p {
      font-size: 18px;
    }
  }
`

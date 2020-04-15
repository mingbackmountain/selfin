import styled from "@emotion/styled"

import { InfoContainerProps } from "../types"

export const InfoContainer = styled.div<InfoContainerProps>`
  ${props =>
    props.usingBackground
      ? `background: url("/images/kid.png") center center;
    background-size: cover;`
      : `background: #fff;`}
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  .title {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;

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
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 20px;
  margin-top: 20px;

  @media screen and (min-width: 425px) {
    gap: 40px;
  }

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
    padding: 0 60px;
    grid-gap: 120px;

    .mobile {
      display: none;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  > img {
    width: 80px;
    height: 80px;
  }

  > h1 {
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }

  > p {
    font-size: 14px;
  }

  @media screen and (min-width: 426px) {
    > img {
      width: 110px;
      height: 110px;
    }
  }

  @media screen and (min-width: 769px) {
    > img {
      width: 110px;
      height: 110px;
    }

    > h1 {
      font-size: 24px;
    }

    > p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1441px) {
    > img {
      width: 220px;
      height: 220px;
    }

    > h1 {
      font-size: 32px;
    }

    > p {
      font-size: 18px;
    }
  }
`

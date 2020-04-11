import styled from "@emotion/styled"

import { Item } from "../types"

export const Container = styled.div`
  background-color: #ffc626;
  margin: 0 0 20px;

  .button {
    display: none;
  }

  .cards {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
    }
  }
`

export const CardContainer = styled.div<Item>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.item}, 100%);
  grid-gap: 30px;
  margin: 60px 20px 0;
  overflow: hidden;

  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(${props => props.item}, 1fr);
    margin: 60px 30px 0;
  }

  @media screen and (min-width: 768px) {
    margin: 60px 0 0;
  }
`

export const Card = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 30px;
  max-width: 280px;

  > img {
    width: 100%;
  }

  > .event-description {
    padding: 20px 40px;
  }

  h1 {
    margin: 0;
    font-size: 24px;
    text-align: center;
  }

  p {
    display: flex;
    align-items: center;

    img {
      width: 19px;
      height: 19px;
      margin-right: 30px;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      border-radius: 40px;
      background-color: #50bf8a;
      font-size: 24px;
      color: #fff;
      width: 200px;
    }
  }
`

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 20px;
  margin-top: 20px;

  div {
    display: flex;
  }
`

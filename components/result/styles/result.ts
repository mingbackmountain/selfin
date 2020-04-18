import styled from "@emotion/styled"

import { Item } from "../types"

export const Container = styled.div`
  margin-top: 30px;

  .button {
    display: none;
  }

  .cards {
    display: flex;
  }

  @media screen and (min-width: 1441px) {
    margin-bottom: 30px;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
    }
  }
`

export const CardContainer = styled.div<Item>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  overflow: hidden;
  padding: 20px;

  @media screen and (min-width: 426px) {
    grid-template-columns: repeat(${props => props.item}, 280px);
    overflow: scroll;
    margin: auto 50px;
    padding: 20px 10px;
  }

  @media screen and (min-width: 1025px) {
    margin: 20px 50px;
    grid-template-columns: repeat(${props => props.item}, 1fr);
  }

  @media screen and (min-width: 1441px) {
    grid-template-columns: repeat(${props => props.item}, 300px);
    margin: 20px auto;
  }
`

export const Card = styled.div`
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 30px;

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
      cursor: pointer;
      border-radius: 40px;
      background-color: #50bf8a;
      font-size: 24px;
      color: #fff;
      width: 200px;

      &:focus {
        outline: none;
      }
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

import styled from "@emotion/styled"

import { SelectState } from "../types"

export const Select = styled.div<SelectState>`
  box-sizing: border-box;
  position: relative;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  font-weight: 600;
  height: 70px;
  border: 1px solid #b3b3b3;
  border-radius: 20px;
  padding: 5px 10px;
  color: #b3b3b3;
  font-size: 18px;
  width: 100%;
  margin: 5px 0;
  cursor: pointer;

  span {
    font-size: 20px;
  }

  ::after {
    position: absolute;
    content: "";
    top: 28px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 9px solid #b3b3b3;
  }

  ul {
    width: 100%;
    display: ${props => (props.isOpen ? `block` : `none`)};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 200px;
    overflow-y: scroll;
    border-radius: 19px;
    border: solid 1px rgba(112, 112, 112, 0.2);

    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(255, 186, 0, 0.14);
      border-radius: 0 19px 19px 0;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #ffba00;
    }

    li {
      z-index: 1;
      background: white;
      padding: 5px 10px;
      cursor: pointer;

      :hover {
        background-color: #fff5db;
      }
    }
  }
`

export const QuestionContainer = styled.div`
  width: 100%;
  margin: 10px 0;

  h2 {
    font-size: 15px;
    font-weight: 300;
    margin: 0;
  }

  @media screen and (min-width: 426px) {
    h2 {
      font-size: 20px;
    }
  }
`

export const SelectTab = styled.select`
  font-weight: 300;
  background-color: #efefef;
  width: 100%;
  appearance: none;
  border-radius: 5px;
  border: none;
  padding: 4px 0;
  text-align-last: center;

  @media screen and (min-width: 426px) {
    font-size: 16px;
  }
`

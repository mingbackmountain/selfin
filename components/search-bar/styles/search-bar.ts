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
  width: 100% !important;
  margin: 5px;
  max-width: 400px;

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
    left: 50px;
    bottom: -40px;
    z-index: 1;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      background: white;
      padding: 5px 10px;
      border: 1px solid #b3b3b3;
    }
  }

  @media screen and (min-width: 1100px) {
    height: 55px;
  }
`

import styled from "styled-components"

import { SelectState } from "../interfaces/custom-dropdown"

export const Select = styled.div<SelectState>`
  position: relative;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  font-weight: 600;
  height: 55px;
  border: 1px solid #b3b3b3;
  border-radius: 20px;
  padding: 5px 10px;
  color: #b3b3b3;

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
`

import styled from "@emotion/styled"

export const Pagination = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border: 1px solid #ff2000;
  border-radius: 50%;
  margin: 0 5px;

  &.selected {
    background-color: #ff2000;
  }
`

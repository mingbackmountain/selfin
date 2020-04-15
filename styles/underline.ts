import styled from "@emotion/styled"

interface LineProps {
  color: "red" | "yellow"
}

export const UnderLine = styled.div<LineProps>`
  width: 70%;
  height: 2px;
  background-color: ${props => (props.color === "red" ? `#f23318` : `#f2d600`)};
  border-radius: 40px;

  @media screen and (min-width: 426px) {
    height: 3px;
  }

  @media screen and (min-width: 769px) {
    height: 5px;
  }
`

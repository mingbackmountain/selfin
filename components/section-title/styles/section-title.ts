import styled from "@emotion/styled"

export const Title = styled.div`
  width: fit-content;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  @media screen and (min-width: 426px) {
    h1 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 769px) {
    h1 {
      font-size: 26px;
    }
  }
`

export const Subtitle = styled(Title)`
  h2 {
    margin: 0;
  }
`

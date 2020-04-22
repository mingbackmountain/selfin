import styled from "@emotion/styled"

export const Title = styled.div`
  width: fit-content;

  h1 {
    font-size: 20px;
    margin: 0;
    font-weight: 600;
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
    font-weight: 600;
    margin: 0;
    font-size: 16px;
  }

  @media screen and (min-width: 426px) {
    h2 {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 769px) {
    h2 {
      font-size: 20px;
    }
  }
`

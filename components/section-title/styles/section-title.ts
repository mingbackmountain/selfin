import styled from "@emotion/styled"

export const Title = styled.div`
  width: fit-content;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  @media screen and (min-width: 769px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export const Subtitle = styled(Title)`
  h2 {
    margin: 0;
  }
`

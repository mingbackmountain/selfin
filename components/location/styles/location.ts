import styled from "@emotion/styled"

export const LocationContainer = styled.div`
  margin-bottom: 30px;

  iframe {
    width: 100%;
    min-height: 300px;
    border: 1px solid;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 769px) {
    iframe {
      width: 60%;
      min-height: 300px;
    }
  }

  @media screen and (min-width: 1441px) {
    iframe {
      width: 50%;
      min-height: 400px;
    }
  }
`

export const LocationAndTime = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  svg {
    margin-right: 30px;
  }
`

import styled from "@emotion/styled"

export const FooterContainer = styled.footer`
  background: #ffba00;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  font-weight: 300;
  padding: 30px 0;
  display: flex;
  justify-content: center;

  /* Container */
  > div {
    display: flex;
    flex-flow: column;

    > img {
      max-width: 200px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 769px) {
    display: block;

    > div {
      flex-flow: row;
      justify-content: space-between;
    }
  }
`

export const LeftSection = styled.div`
  margin-bottom: 30px;
  word-break: break-all;

  p {
    margin: 0;
  }

  @media screen and (min-width: 769px) {
    margin-bottom: 0px;
  }
`

export const RightSection = styled.div`
  word-break: break-all;

  h6,
  p {
    margin: 0;
  }

  h6 {
    font-size: 20px;
    font-weight: 300;
  }
`

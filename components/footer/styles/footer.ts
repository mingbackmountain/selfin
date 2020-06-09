import styled from "@emotion/styled"

export const FooterContainer = styled.footer`
  background: #353535;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: white;
  padding: 30px 0;
  display: flex;
  justify-content: center;

  /* Container */
  > div {
    display: flex;
    flex-flow: column;
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
  word-break: break-all;
  padding-left: 100px;
  h6,
  p {
    margin: 0;
  }

  h6 {
    font-size: 20px;
    font-weight: 700;
  }
`

export const RightSection = styled.div`
  word-break: break-all;
  padding-right: 100px;
  h6,
  p {
    margin: 0;
  }

  h6 {
    font-size: 20px;
    font-weight: 700;
  }
`

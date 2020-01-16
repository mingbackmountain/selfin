import styled from "styled-components"

export const FooterContainer = styled.footer`
  margin-top: 60px;
  background-color: #ffa81f;
  border-radius: 20px 20px 0 0;
  color: white;
  font-family: "Mitr", Arial, Helvetica, sans-serif;

  > div {
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;

    > img {
      max-width: 200px;
      margin-bottom: 20px;
    }
  }

  p {
    margin-bottom: 10px;
  }

  .social > img {
    max-width: 30px;
  }

  @media screen and (min-width: 600px) {
    border-radius: 50px 50px 0 0;

    > div {
      text-align: left;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .social > img {
      max-width: 40px;
    }
  }

  @media screen and (min-width: 900px) {
    > div {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1200px) {
    > div {
      font-size: 28px;
    }

    .social > img {
      max-width: none;
    }
  }
`

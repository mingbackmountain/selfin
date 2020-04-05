import styled from "styled-components"

export const ADHDSection = styled.section`
  margin-top: 40px;
  display: flex;

  .kid-image,
  .wall1,
  .wall2 {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    justify-content: space-between;

    .kid-image {
      display: flex;
      flex-flow: wrap;
      justify-content: flex-end;
    }
  }

  @media screen and (min-width: 1552px) {
    .wall1 {
      display: block;
    }
  }

  @media screen and (min-width: 1901px) {
    .wall2 {
      display: block;
    }
  }
`

export const DescriptionContainer = styled.div`
  margin-left: 60px;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }

  button {
    font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
    background-color: #f2d600;
    border: none;
    border-radius: 20px;
    font-size: 24px;
    padding: 6px 50px;
    margin-top: 20px;
    color: #461313;
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 56px;
      margin: 0;
      letter-spacing: 3.5px;
      line-height: 1.33;
      color: #461313;
    }

    p {
      font-size: 20px;
      margin: 0;
    }
  }
`

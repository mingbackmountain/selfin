import styled from "styled-components"

export const TestSection = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;

  .kid-image {
    display: none;
  }

  @media screen and (min-width: 1300px) {
    .kid-image {
      display: block;
      position: absolute;
      left: 0;
      top: 0;

      > img {
        width: 60%;
      }
    }
  }

  @media screen and (min-width: 1600px) {
    .kid-image {
      position: static;

      > img {
        width: 80%;
      }
    }
  }

  @media screen and (min-width: 1800px) {
    .kid-image {
      > img {
        width: 100%;
      }
    }
  }
`

export const DescriptionContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  color: #461313;
  z-index: 1;

  > h1 {
    font-size: 28px;
  }

  > h2 {
    font-weight: 500;
    font-size: 20px;
  }

  @media screen and (min-width: 600px) {
    margin-right: 60px;

    > h1 {
      font-size: 32px;
    }

    > h2 {
      font-size: 40px;
    }
  }

  @media screen and (min-width: 1100px) {
    > h1 {
      font-size: 50px;
    }
  }
`

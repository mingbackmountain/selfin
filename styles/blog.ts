import styled from "styled-components"

export const BlogSection = styled.section`
  > h1 {
    color: #461313;
    font-size: 50px;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  > .cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }

  > .all-blog-button {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #ffa81f;
    text-align: right;
  }

  @media screen and (min-width: 900px) {
    > .cards {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  }

  @media screen and (min-width: 1100px) {
    > .all-blog-button {
      font-size: 28px;
    }

    > .cards {
      grid-gap: 120px;
    }
  }
`

export const BlogCardContainer = styled.div`
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);

  > img {
    width: 100%;
  }

  > h3 {
    margin: 20px 20px 0;
    font-size: 24px;
    font-weight: 600;
    word-break: break-word;
    overflow-wrap: break-word;
    min-height: 90px;
  }

  > p {
    margin: 0 20px;
    min-height: 100px;
  }

  > div {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.16);

    > p {
      margin-left: 20px;
      font-weight: 300;
      color: #818181;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 900px) {
    > h3 {
      font-size: 20px;
      min-height: 130px;
    }

    > p {
      min-height: 180px;
    }
  }

  @media screen and (min-width: 1100px) {
    > h3 {
      font-size: 24px;
      min-height: 160px;
    }

    > p {
      min-height: 110px;
    }
  }
`

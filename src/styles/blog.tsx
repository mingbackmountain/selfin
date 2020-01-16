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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 120px;
  }

  > .all-blog-button {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 500;
    color: #ffa81f;
    text-align: right;
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
    min-height: 140px;
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
`

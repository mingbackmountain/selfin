import styled from "@emotion/styled"

export const BlogSection = styled.section`
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  > h1 {
    color: #461313;
    font-size: 32px;
    font-weight: 600;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .top-section {
    display: flex;
    justify-content: space-between;
  }

  > .cards {
    display: grid;
    grid-template-columns: repeat(3, 100%);
    grid-gap: 20px;
    overflow: scroll;
  }

  .all-blog-button {
    transform: translateY(20px);
    display: none;
    font-size: 14px;
    font-weight: 500;
    text-align: right;
    margin: 10px 0;

    &.mobile {
      display: block;
    }
  }

  @media screen and (min-width: 900px) {
    > .cards {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }

    .all-blog-button {
      display: block;
      margin: 0px 0px 10px;
      transform: translateY(50px);

      &.mobile {
        display: none;
      }
    }
  }
`

export const BlogCardContainer = styled.div`
  width: 100%;
  text-align: center;

  > img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  }

  > h1 {
    font-weight: 300;
    font-size: 18px;
  }
`

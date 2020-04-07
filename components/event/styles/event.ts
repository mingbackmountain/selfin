import styled from "styled-components"

export const EventContainer = styled.div`
  margin-top: 45px;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  > h1 {
    font-weight: 600;
    color: #461313;
  }

  > .cards {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }

  > .all-event-button {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    text-align: right;
  }

  @media screen and (min-width: 500px) {
    > .cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }

  @media screen and (min-width: 900px) {
    > .cards {
      grid-gap: 40px;
    }
  }

  @media screen and (min-width: 1000px) {
    > .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1100px) {
    > .cards {
      grid-gap: 10px;
    }

    > .all-event-button {
      font-size: 28px;
    }
  }
`

export const EventCardContainer = styled.div`
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  word-break: break-word;
  overflow-wrap: break-word;

  > img {
    width: 100%;
  }

  p {
    margin: 5px 20px;
  }

  h2 {
    font-size: 24px;
    color: #50bf8a;
    margin: 10px 20px;
  }

  @media screen and (min-width: 500px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1000px) {
    > .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1100px) {
    > .cards {
      grid-gap: 10px;
    }
  }
`

export const Price = styled.div`
  color: #50bf8a;
  font-size: 35px;
  font-weight: 700;
  text-align: right;

  > span {
    font-size: 25px;
    margin-right: 20px;
  }
`

export const EventInfoText = styled.p`
  font-size: 22px;
  font-weight: 300;
  margin: 0;
  display: flex;
  align-items: center;

  > img {
    width: 24px;
    margin-right: 10px;
  }
`

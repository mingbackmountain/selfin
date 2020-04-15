import styled from "@emotion/styled"

export const EventContainer = styled.div`
  margin: 45px auto;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  > h1 {
    font-weight: 600;
    color: #461313;
  }

  > .cards {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 80%);
    overflow: scroll;
    padding-bottom: 10px;
  }

  .all-event-button {
    display: none;
    transform: translateY(20px);

    &.mobile {
      display: block;
      text-align: right;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 426px) {
    .cards {
      grid-template-columns: repeat(4, 45%);
    }
  }

  @media screen and (min-width: 769px) {
    > .all-event-button {
      display: block;
      margin-top: 20px;
      font-size: 20px;
      font-weight: 500;
      text-align: right;

      &.mobile {
        display: none;
      }
    }

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
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.16);
  word-break: break-word;
  overflow-wrap: break-word;

  > img {
    width: 100%;
  }

  p {
    font-size: 13px;
    margin: 5px 20px;
  }

  h2 {
    font-size: 15px;
    color: #50bf8a;
    margin: 10px 20px;
  }

  @media screen and (min-width: 769px) {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);

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
  font-size: 15px;
  font-weight: 700;
  text-align: right;

  > span {
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
    width: 13px;
    margin-right: 10px;
  }
`

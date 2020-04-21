import styled from "@emotion/styled"

export const EventContainer = styled.div`
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  > h1 {
    font-weight: 600;
    color: #461313;
  }

  > .cards {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 250px);
    overflow: scroll;
    padding-bottom: 10px;
    cursor: pointer;
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
      gap: 20px;
    }
  }

  @media screen and (min-width: 769px) {
    .all-event-button {
      display: block;
      margin-top: 20px;
      font-size: 20px;
      font-weight: 500;
      text-align: right;

      &.mobile {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1025px) {
    > .cards {
      grid-template-columns: repeat(4, 1fr);
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
  position: relative;

  section.event-info {
    margin-bottom: 50px;
  }

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

  @media screen and (min-width: 426px) {
    height: 400px;

    section.event-info {
      height: 150px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 769px) {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
    height: 450px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`

export const Price = styled.div`
  color: #50bf8a;
  font-size: 15px;
  font-weight: 700;
  text-align: right;
  position: absolute;
  bottom: 10px;
  right: 10px;

  > span {
    margin-right: 20px;
  }

  @media screen and (min-width: 426px) {
    font-size: 20px;
  }
`

export const EventInfoText = styled.p`
  font-size: 22px;
  font-weight: 300;
  margin: 0;
  display: flex;
  align-items: center;

  > img {
    align-self: flex-start;
    width: 13px;
    margin-right: 10px;
    margin-top: 5px;
  }
`

import styled from "@emotion/styled"

export const EventContainer = styled.div`
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;

  > h1 {
    font-weight: 600;
    color: #461313;
  }

  > .cards {
    display: flex;
    overflow: scroll;
    padding-bottom: 10px;
  }

  .all-event-button {
    margin-top: 10px;
    display: none;

    &.mobile {
      display: block;
      text-align: right;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 769px) {
    .all-event-button {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-right: 70px;
      font-size: 20px;
      font-weight: 500;
      text-align: right;

      &.mobile {
        display: none;
      }
    }
  }
`

export const EventCardContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.16);
  word-break: break-word;
  overflow-wrap: break-word;
  position: relative;
  z-index: 0;

  section.event-info {
    margin-bottom: 20px;
    height: 100px;
  }

  > img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
  }

  p {
    font-size: 13px;
    margin: 5px 20px;
  }

  h2 {
    font-size: 15px;
    color: #6ace9e;
    margin: 10px 20px;
    font-weight: 700;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 20px;

    button {
      cursor: pointer;
      border-radius: 40px;
      background-color: #6ace9e;
      font-size: 15px;
      color: #fff;
      width: 200px;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  @media screen and (min-width: 426px) {
    height: 480px;

    section.event-info {
      height: 150px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }

    .button-container {
      button {
        font-size: 18px;
      }
    }
  }

  @media screen and (min-width: 769px) {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);

    section.event-info {
      margin-bottom: 50px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }

    .button-container {
      button {
        font-size: 24px;
      }
    }
  }
`

export const Price = styled.div`
  color: #6ace9e;
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

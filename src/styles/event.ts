import styled from "styled-components"

export const EventContainer = styled.div`
  margin-top: 45px;

  > h1 {
    font-weight: 500;
    color: #461313;
  }

  > .recommend {
    font-size: 50px;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  > .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
  }

  > .all-event-button {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 500;
    color: #50bf8a;
    text-align: right;
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

  > h2,
  > p {
    margin-left: 20px;
    margin-right: 20px;
  }

  h2 {
    font-size: 24px;
    color: #50bf8a;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const Price = styled.div`
  color: #50bf8a;
  font-size: 48px;
  font-family: "Mitr", Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-align: right;

  > span {
    font-size: 24px;
    margin-right: 20px;
  }
`

export const EventInfoText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;

  > img {
    width: 24px;
    margin-right: 10px;
  }
`

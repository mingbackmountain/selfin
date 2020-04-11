import styled from "@emotion/styled"

export const Container = styled.div`
  background-color: #ffc626;
  margin: 0 0 20px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
  }

  .cards {
    display: flex;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 60px;
`

export const Card = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 30px;

  > img {
    width: 100%;
  }

  > .event-description {
    padding: 20px 40px;
  }

  h1 {
    margin: 0;
    font-size: 24px;
    text-align: center;
  }

  p {
    display: flex;
    align-items: center;

    img {
      width: 19px;
      height: 19px;
      margin-right: 30px;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      border-radius: 40px;
      background-color: #50bf8a;
      font-size: 24px;
      color: #fff;
      width: 200px;
    }
  }
`

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 20px;
  margin-top: 20px;

  div {
    display: flex;
  }
`

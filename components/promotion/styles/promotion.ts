import styled from "styled-components"

export const Container = styled.div`
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  background: #ffc626;
  margin-top: 60px;
  padding: 60px 60px;
`

export const RedLine = styled.div`
  width: 70%;
  height: 5px;
  background-color: #f23318;
  border-radius: 40px;
`

export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Menu = styled.div`
  flex: 0 1 40%;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    min-height: 36px;
  }

  .selected {
    color: #ff2000;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  span {
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 1 50%;
    justify-content: space-evenly;
  }
`

export const MainContent = styled.div`
  display: flex;
`

export const LeftSection = styled.div`
  flex: 0 1 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;

  > img {
    margin-top: 30px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 1 50%;
  }
`

export const RightSection = styled.div`
  flex: 0 1 50%;
  min-height: 450px;
  background-color: #fff;
  border-radius: 10px;
  color: #ffc626;
  box-sizing: border-box;

  p {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    flex: 0 1 40%;
    padding: 30px 50px 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 80px 80px;
  }
`

export const Title = styled.div`
  width: fit-content;

  h1 {
    margin: 0;
  }
`

export const Button = styled.div`
  width: 230px;
  border-radius: 20px;
  background-color: #ff2000;
  font-size: 24px;
  color: #fff;
  font-weight: 300;
  text-align: center;
  padding: 5px 0;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .button-group {
    .left {
      cursor: pointer;
      margin-right: 15px;
    }

    .right {
      cursor: pointer;
      margin-left: 15px;
    }
  }

  .pages-group {
    display: flex;
    margin-right: 20px;
    margin-top: 5px;
  }
`

export const Pagination = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border: 1px solid #ff2000;
  border-radius: 50%;
  margin: 0 5px;

  &.selected {
    background-color: #ff2000;
  }
`

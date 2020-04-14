import styled from "@emotion/styled"

export const Container = styled.div`
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  background: #ffc626;
  margin-top: 60px;
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
  }
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
  flex: 0 1 40%;
  min-height: 450px;
  background-color: #fff;
  border-radius: 10px;
  color: #ffc626;
  box-sizing: border-box;

  p {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    padding: 30px 50px 50px;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 1 50%;
    padding: 50px 80px 80px;
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

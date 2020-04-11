import styled from "@emotion/styled"

export const NearbyFormContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
  padding: 10px;

  > h1 {
    font-size: 20px;
    text-align: center;
  }

  @media screen and (min-width: 1100px) {
    border-radius: 55px;
    background-color: #ffffff;
    padding: 20px 70px;
    transform: translateY(-45%);

    > h1 {
      font-size: 34px;
      margin: 0 0 20px;
      text-align: start;
    }
  }
`

export const DropdownForm = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: 25% 25% 20% 20%;
    grid-gap: 3.33%;
  }
`

export const Button = styled.button`
  width: 259px;
  height: 50px;
  border-radius: 19px;
  color: white;
  background-color: #f23318;
  font-size: 28px;
  font-weight: 600;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  margin-top: 20px;

  @media screen and (min-width: 1100px) {
    font-size: 32px;
    width: 100%;
    height: 67px;
    margin-top: auto;
  }
`

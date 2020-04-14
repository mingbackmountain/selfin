import styled from "@emotion/styled"

export const NearbyFormContainer = styled.div`
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (min-width: 1025px) {
    display: block;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
    border-radius: 55px;
    background-color: #ffffff;
    transform: translateY(-45%);
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

export const SearchButton = styled.div`
  width: 100px;
  height: 32px;
  font-size: 12px;
  font-weight: 300px;
  color: #fff;
  background-color: #ff2000;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

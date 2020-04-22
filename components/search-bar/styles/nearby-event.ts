import styled from "@emotion/styled"

export const NearbyFormContainer = styled.div`
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (min-width: 1025px) {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
    border-radius: 55px;
    background-color: #ffffff;
    transform: translateY(-45%);
    margin-bottom: 0;

    h1 {
      width: 100%;
      padding-left: 70px;
      font-weight: 600;
    }
  }
`

export const MobileContainer = styled(NearbyFormContainer)`
  @media screen and (min-width: 769px) {
    box-shadow: none;
    border-radius: none;
    background-color: #ffffff;
    transform: translateY(0);
  }
`

export const DropdownForm = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1025px) {
    padding: 0 70px 20px;
    display: grid;
    grid-template-columns: 40% 40% 18.5%;
    grid-gap: 10px;
  }
`

export const Button = styled.button`
  width: 100%;
  border-radius: 19px;
  color: white;
  background-color: #fe2000;
  font-size: 28px;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  cursor: pointer;
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

  @media screen and (min-width: 426px) {
    width: 150px;
    height: 48px;
    font-size: 16px;
  }
`

import styled from "@emotion/styled"

export const NameContainer = styled.section`
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 600;
  }
`

export const PlaceWithDescription = styled.div`
  display: flex;

  p {
    margin: 0;
  }

  p.warning {
    color: #fe2000;
    font-size: 12px;
  }
`

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
  border-radius: 20px;
  margin-right: 20px;
`

export const ReservationContainer = styled.div`
  transform: translateY(50px);
  z-index: 1;
  background: #ffba00;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;

  h1 {
    color: #fff;
    margin: 0;
    text-align: center;
  }

  .price {
    display: flex;
    align-items: center;
    margin: 10px 0;

    select {
      margin-left: 5px;
    }
  }

  .ticket-left {
    color: #767676;
    font-size: 12px;
  }

  button {
    padding: 5px 15px;
    font-size: 18px;
    background-color: #fe2000;
    border: transparent;
    border-radius: 40px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`

export const MobileNameContainer = styled.div`
  p {
    font-size: 15px;
  }
`

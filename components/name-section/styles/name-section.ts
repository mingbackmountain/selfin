import styled from "@emotion/styled"

export const NameContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

export const PlaceWithDescription = styled.div`
  display: flex;

  p {
    margin: 0;
  }

  p.warning {
    color: #f23318;
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
  z-index: 2;
  background: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;

  h1 {
    color: #ffc626;
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
    background-color: #f23318;
    border: transparent;
    border-radius: 40px;
    color: #fff;
  }
`

export const MobileNameContainer = styled.div`
  p {
    font-size: 15px;
  }
`

import React from "react"
import styled from "styled-components"

import { Container } from "../styles/container"

const NearbyFormContainer = styled.div`
  border-radius: 55px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 20px 70px;
  transform: translateY(-45%);

  > h1 {
    font-size: 34px;
    margin: 0;
  }
`

export const NearbyEventForm: React.FC = () => {
  return (
    <Container>
      <NearbyFormContainer>
        <h1>ค้นหากิจกรรมที่ใกล้คุณ</h1>

        <div>
          <select>
            <option value="" disabled selected>
              ประเภทกิจกรรม
            </option>
          </select>
          <select>
            <option value="" disabled selected>
              จังหวัด
            </option>
          </select>
          <select>
            <option value="" disabled selected>
              เดือน
            </option>
          </select>
          <button>ค้นหา</button>
        </div>
      </NearbyFormContainer>
    </Container>
  )
}

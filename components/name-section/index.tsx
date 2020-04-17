import { css } from "@emotion/core"

import { TitleWithYellowLine } from "../section-title"

import {
  NameContainer,
  PlaceWithDescription,
  Logo,
  ReservationContainer,
  MobileNameContainer,
} from "./styles/name-section"
import { PagePadding } from "../../styles/container"

export const NameSection = () => (
  <NameContainer css={PagePadding({ topAndBottom: 20 })}>
    <div>
      <h1>TOMOKO ฝึกปัญญาพัฒนาสมอง (Education)</h1>
      <PlaceWithDescription>
        <Logo>logo</Logo>
        <div>
          <p>วันเวลา : 2 พฤศจิกายน 2562 (09.00 น. -16.00 น.)</p>
          <p>สถานที่ : TOMOKO CENTER ราชดำริ</p>
          <p className="warning">กิจกรรมนี้เหมาะสำหรับเด็กอายุ 7 ปีขึ้นไป</p>
        </div>
      </PlaceWithDescription>
    </div>
    <ReservationContainer>
      <h1>บัตรเข้าร่วมกิจกรรม</h1>
      <div>
        <div className="price">
          ฿690 X{" "}
          <select>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
      <div className="ticket-left">12 ที่นั่งเหลืออยู่</div>
      <button>จองตอนนี้</button>
    </ReservationContainer>
  </NameContainer>
)

export const MobileNameSection = () => {
  return (
    <MobileNameContainer css={PagePadding()}>
      <TitleWithYellowLine
        title="TOMOKO ฝึกปัญญาพัฒนาสมอง"
        style={css`
          width: 100%;
          display: flex;
          flex-flow: column;
          align-items: center;
        `}
      />
      <p>ประเภทกิจกรรม : การใช้ความคิดและสมาธิ</p>
      <p>วันเวลา : 2 พฤศจิกายน 2563 (09.00 น.-16.00 น.)</p>
      <p>สถานที่ : Tomoko Center ราชดำริ</p>
    </MobileNameContainer>
  )
}

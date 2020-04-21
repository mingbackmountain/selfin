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

interface NameProps {
  event: {
    name: string
    date: string
    location: string
    price: number
  }
}

export const NameSection: React.FC<NameProps> = ({ event }) => (
  <NameContainer css={PagePadding({ topAndBottom: 20 })}>
    <div>
      <h1>{event.name}</h1>
      <PlaceWithDescription>
        <Logo>logo</Logo>
        <div>
          <p>วันเวลา : {event.date}</p>
          <p>สถานที่ : {event.location}</p>
        </div>
      </PlaceWithDescription>
    </div>
    <ReservationContainer>
      <h1>บัตรเข้าร่วมกิจกรรม</h1>
      <div>
        <div className="price">
          ฿{event.price} X{" "}
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

export const MobileNameSection: React.FC<NameProps> = ({ event }) => {
  return (
    <MobileNameContainer css={PagePadding()}>
      <TitleWithYellowLine
        title={event.name}
        style={css`
          width: 100%;
          display: flex;
          flex-flow: column;
          align-items: center;
        `}
      />
      <p>ประเภทกิจกรรม : การใช้ความคิดและสมาธิ</p>
      <p>วันเวลา : {event.date}</p>
      <p>สถานที่ : {event.location}</p>
    </MobileNameContainer>
  )
}

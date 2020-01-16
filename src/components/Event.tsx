import React, { useContext } from "react"

import { EventCard } from "./EventCard"

import { Container } from "../styles/container"
import { EventContainer } from "../styles/event"

import { asset } from "../contexts/asset"

export const Events: React.FC = () => {
  const { news1and4, news2, news3 } = useContext(asset)

  const mockData = [
    {
      img: news1and4,
      name: "Tomoko",
      place: "Tomato Improvement Center",
      time: "5AM - 4PM",
      price: 690,
    },
    {
      img: news2,
      name: "Mindful Spark ",
      place: "Parkchong-Nakhonratchasima",
      time: "7 - 9 December 2019",
      price: 4900,
    },
    {
      img: news3,
      name: "ฟาร์มนี้มีฝัน ฉันคือ School life",
      place: "Parkchong-Nakhonratchasima",
      time: "7 - 9 December 2019",
      price: 690,
    },
    {
      img: news1and4,
      name: "Tomoko",
      place: "Tomato Improvement Center",
      time: "5AM - 4PM",
      price: 690,
    },
  ]

  // @todo add responsive at event card
  return (
    <Container>
      <EventContainer>
        <h1>กิจกรรมที่น่าสนใจในเดือนนี้</h1>

        <div className="cards">
          {mockData.map((event, index) => (
            <EventCard key={`${event.name}${index}`} event={event} />
          ))}
        </div>

        <div className="all-event-button">ดูกิจกรรมทั้งหมด ></div>
      </EventContainer>
    </Container>
  )
}

import React from "react"

import { EventCard } from "./EventCard"

import { Container } from "../styles/container"
import { EventContainer } from "../styles/event"
import { LongerYellowHeadline } from "../styles/yellow-headline"

import { EventTypeProps } from "../types/event"

export const Events: React.FC<EventTypeProps> = ({ isRecommend, text }) => {
  const mockData = [
    {
      img: "/images/s-1450016.png",
      name: "Tomoko",
      place: "Tomato Improvement Center",
      time: "5AM - 4PM",
      price: 690,
    },
    {
      img: "/images/36044.png",
      name: "Mindful Spark ",
      place: "Parkchong-Nakhonratchasima",
      time: "7 - 9 December 2019",
      price: 4900,
    },
    {
      img: "/images/s-1450014.png",
      name: "ฟาร์มนี้มีฝัน ฉันคือ School life",
      place: "Parkchong-Nakhonratchasima",
      time: "7 - 9 December 2019",
      price: 690,
    },
    {
      img: "/images/s-1450016.png",
      name: "Tomoko",
      place: "Tomato Improvement Center",
      time: "5AM - 4PM",
      price: 690,
    },
  ]

  return (
    <Container>
      <EventContainer>
        {isRecommend ? (
          <h1>{text}</h1>
        ) : (
          <h1 className="recommend">
            {text}
            <LongerYellowHeadline />
          </h1>
        )}

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

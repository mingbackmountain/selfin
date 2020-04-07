import { useState, useEffect } from "react"
import axios from "axios"
import { EventCard } from "./card"

import { Container } from "../../styles/container"
import { EventContainer } from "./styles/event"
import { LongerYellowHeadline } from "../../styles/yellow-headline"

import { EventTypeProps } from "./types/event"

interface EventCardData {
  img: string
  name: string
  place: string
  time: string
  price: number
}

interface ResponseFromServer {
  data: EventCardData[]
}

export const Events: React.FC<EventTypeProps> = ({ text }) => {
  const [data, addDataToState] = useState<EventCardData[]>()

  useEffect(() => {
    axios.get<ResponseFromServer>("/api/event").then(response => {
      const dataPayload = response.data

      addDataToState(dataPayload.data)
    })
  })

  return (
    <Container>
      <EventContainer>
        <h1 className="recommend">
          {text}
          <LongerYellowHeadline />
        </h1>

        <div className="cards">
          {data &&
            data.map((event, index) => (
              <EventCard key={`${event.name}${index}`} event={event} />
            ))}
        </div>

        <div className="all-event-button">ดูกิจกรรมทั้งหมด ></div>
      </EventContainer>
    </Container>
  )
}

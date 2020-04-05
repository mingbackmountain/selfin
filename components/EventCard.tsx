import React from "react"

import { EventInfo } from "./EventInfo"

import { EventCardContainer, Price } from "../styles/event"

import { EventCardProps } from "../types/event"

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <EventCardContainer>
      <img src={event.img} alt="event" />
      <h2>{event.name}</h2>
      <EventInfo placeName={event.place} />
      <EventInfo time={event.time} />
      <Price>
        {event.price} <span>THB</span>
      </Price>
    </EventCardContainer>
  )
}

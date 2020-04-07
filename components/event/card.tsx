import React from "react"

import { EventInfo } from "./card-info"

import { EventCardContainer, Price } from "./style/event"

import { Event } from "./types/event"

export const EventCard: React.FC<Event> = ({ event }) => {
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

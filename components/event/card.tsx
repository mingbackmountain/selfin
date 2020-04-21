import React from "react"

import { EventInfo } from "./card-info"

import { EventCardContainer, Price } from "./styles/event"

import { EventCardProps } from "./types"

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <EventCardContainer>
      <img src={event.img} alt="event" />
      <h2>{event.name}</h2>
      <section className="event-info">
        <EventInfo placeName={event.place} />
        <EventInfo time={event.time} />
      </section>
      <Price>
        {event.price} <span>THB</span>
      </Price>
    </EventCardContainer>
  )
}

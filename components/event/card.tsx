import React from "react"
import Link from "next/link"

import { EventInfo } from "./card-info"

import { EventCardContainer, Price as Learnmore } from "./styles/event"

import { EventCardProps } from "./types"

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link href="/event/[id]" as={`/event/${event.id}`}>
      <EventCardContainer>
        <img src={event.img} alt="event" />
        <h2>{event.name}</h2>
        <section className="event-info">
          <EventInfo placeName={event.place} />
          <EventInfo time={event.time} />
        </section>
      </EventCardContainer>
    </Link>
  )
}

export const EventCardNoButton: React.FC<EventCardProps> = ({ event }) => {
  return (
    <EventCardContainer>
      <img src={event.img} alt="event" />
      <h2>{event.name}</h2>
      <section className="event-info">
        <EventInfo placeName={event.place} />
        <EventInfo time={event.time} />
      </section>
    </EventCardContainer>
  )
}

import Link from "next/link"

import { Card } from "./styles/result"

import { EventProps } from "./types/"

export const EventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <Card>
      <img className="event-image" src={event.img} alt="event" />
      <div className="event-description">
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <p>
          <img
            src="/images/facebook-placeholder-for-locate-places-on-maps.png"
            alt="location"
          />
          {event.place}
        </p>
        <p>
          <img src="/images/clock-circular-outline.png" alt="time" />
          {event.time}
        </p>
        <div className="button-container">
          <Link href="/event/[id]" as={`/event/${event.id}`}>
            <button>{event.price} บาท</button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

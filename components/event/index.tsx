import { EventCard } from "./card"
import { Title } from "./title"

import { Container } from "../../styles/container"
import { EventContainer } from "./styles/event"

import { useMockEventData } from "./utils/hooks-get-mock-data"

import { EventTypeProps } from "./types"

export const Events: React.FC<EventTypeProps> = ({ text }) => {
  const data = useMockEventData()

  return (
    <Container>
      <EventContainer>
        <Title text={text} />

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

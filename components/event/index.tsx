import { css } from "@emotion/core"

import { EventCard } from "./card"
import { TitleWithYellowLine } from "../section-title/index"
import { SectionTitle } from "../section-title"

import { PagePadding } from "../../styles/container"
import { EventContainer } from "./styles/event"

import { useMockEventData } from "./utils/hooks-get-mock-data"

import { EventTypeProps } from "./types"
import { CSSProps } from "../layout/types"

export const Events: React.FC<EventTypeProps> = ({ text }) => {
  const data = useMockEventData()

  return (
    <EventContainer css={PagePadding()}>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <TitleWithYellowLine
          style={css`
            margin-bottom: 30px;
          `}
          title={text}
        />

        <div className="all-event-button mobile">ดูกิจกรรมทั้งหมด >></div>
      </div>

      <div className="cards">
        {data &&
          data.map((event, index) => (
            <EventCard key={`${event.name}${index}`} event={event} />
          ))}
      </div>

      <div className="all-event-button">ดูกิจกรรมทั้งหมด ></div>
    </EventContainer>
  )
}

export const CustomEvent: React.FC<EventTypeProps & CSSProps> = ({
  text,
  style,
}) => {
  const data = useMockEventData()

  return (
    <EventContainer css={style}>
      <SectionTitle
        title={text}
        style={css`
          margin-bottom: 30px;
        `}
      />

      <div className="cards">
        {data &&
          data.map((event, index) => (
            <EventCard key={`${event.name}${index}`} event={event} />
          ))}
      </div>
    </EventContainer>
  )
}

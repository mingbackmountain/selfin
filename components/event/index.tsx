import { css } from "@emotion/core"
import Link from "next/link"

import { EventCard } from "./card"
import { TitleWithYellowLine } from "../section-title/index"
import { SectionTitle } from "../section-title"

import { PagePadding } from "../../styles/container"
import { EventContainer } from "./styles/event"

import { useMockEventData } from "../../utils/hooks-get-mock-event"

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
          data.slice(0, 4).map((event, index) => (
            <Link
              key={`${event.name}${index}`}
              href="/event/[id]"
              as={`/event/${event.id}`}
            >
              <div>
                <EventCard event={event} />
              </div>
            </Link>
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
          margin-bottom: 10px;
        `}
      />

      <div className="cards">
        {data &&
          data.map((event, index) => (
            <Link
              key={`${event.name}${index}`}
              href="/event/[id]"
              as={`/event/${event.id}`}
            >
              <div
                css={css`
                  flex: 0 0 300px;

                  @media screen and (min-width: 769px) {
                    flex: 0 0 300px;

                    &:nth-child(-n + 1) {
                      margin: 0;
                    }

                    &:nth-last-child(n + 1) {
                      margin: 0 10px;
                    }
                  }
                `}
              >
                <EventCard event={event} />
              </div>
            </Link>
          ))}
      </div>
    </EventContainer>
  )
}

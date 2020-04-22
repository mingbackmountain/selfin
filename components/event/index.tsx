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

export const Events: React.FC<EventTypeProps & CSSProps> = ({
  text,
  style,
}) => {
  const data = useMockEventData()

  return (
    <EventContainer
      css={css`
        ${PagePadding()}
        ${style}
      `}
    >
      <div
        css={css`
          display: flex;
          flex-flow: column;
        `}
      >
        <div>
          <TitleWithYellowLine
            style={css`
              @media screen and (min-width: 769px) {
                margin-bottom: 20px;
              }
            `}
            title={text}
          />
        </div>

        <div className="all-event-button mobile">ดูกิจกรรมทั้งหมด >></div>
      </div>

      <div className="cards">
        {data &&
          data.slice(0, 4).map((event, index) => (
            <div
              key={`${event.name}${index}`}
              css={css`
                flex: 0 0 100%;

                &:nth-child(-n + 1) {
                  margin: 0;
                }

                &:nth-last-child(n + 1) {
                  margin: 0 10px;
                }

                @media screen and (min-width: 426px) {
                  flex: 0 0 300px;
                }

                @media screen and (min-width: 1441px) {
                  flex: 0 0 400px;
                }
              `}
            >
              <EventCard event={event} />
            </div>
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

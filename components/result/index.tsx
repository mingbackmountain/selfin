import { css } from "@emotion/core"
import Link from "next/link"

import { SectionTitle } from "../section-title"
import { EventCard } from "./event"
import { EventCard as MobileEventCard } from "../event/card"

import { Pagination } from "../../styles/pagination"
import { Container, CardContainer, Navigation } from "./styles/result"
import { PagePadding } from "../../styles/container"

import { Event } from "../event/types"

interface ResultProps {
  isMobile: boolean
  result: Event[]
}

export const Result: React.FC<ResultProps> = ({ isMobile, result }) => {
  return (
    <Container>
      <SectionTitle
        title="ผลการค้นหา"
        style={css`
          ${PagePadding()}
          /* Underline */
          @media screen and (max-width: 768px) {
            div {
              background: #ffba00;
            }
          }
        `}
      />

      <div className="cards">
        <div className="button">
          <img src="/svg/left.svg" alt="left" />
        </div>

        <CardContainer item={result.length}>
          {result.map(event =>
            isMobile ? (
              <Link
                key={event.name}
                href="/event/[id]"
                as={`/event/${event.id}`}
              >
                <div
                  css={css`
                    @media screen and (min-width: 426px) {
                      flex: 0 0 calc(100% / 4);

                      &:nth-child(-n + 1) {
                        margin: 0;
                      }

                      &:nth-last-child(n + 1) {
                        margin: 0 10px;
                      }
                    }
                  `}
                >
                  <MobileEventCard event={event} />
                </div>
              </Link>
            ) : (
              <EventCard key={event.name} event={event} />
            )
          )}
        </CardContainer>

        <div className="button">
          <img src="/svg/right.svg" alt="right" />
        </div>
      </div>

      <Navigation
        css={css`
          display: none;

          @media screen and (min-width: 1441px) {
            display: flex;
          }
        `}
      >
        <div>
          <Pagination className="selected" />
          <Pagination />
          <Pagination />
          <Pagination />
        </div>
      </Navigation>
    </Container>
  )
}

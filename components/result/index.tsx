import { css } from "@emotion/core"

import { SectionTitle } from "../section-title"
import { EventCard } from "./event"

import { Pagination } from "../../styles/pagination"
import { Container, CardContainer, Navigation } from "./styles/result"

import { EventResult } from "./types"

const mockData: EventResult[] = [
  {
    img: `/images/s-1450016.png`,
    name: `Lorem ipsum`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    place: `Lorem ipsum`,
    time: `Lorem ipsum`,
    price: 590,
  },
  {
    img: `/images/s-1450016.png`,
    name: `Lorem ipsum`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    place: `Lorem ipsum`,
    time: `Lorem ipsum`,
    price: 590,
  },
  {
    img: `/images/s-1450016.png`,
    name: `Lorem ipsum`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    place: `Lorem ipsum`,
    time: `Lorem ipsum`,
    price: 590,
  },
  {
    img: `/images/s-1450016.png`,
    name: `Lorem ipsum`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    place: `Lorem ipsum`,
    time: `Lorem ipsum`,
    price: 590,
  },
]

export const Result: React.FC = () => (
  <Container>
    <SectionTitle
      title="ผลการค้นหา"
      style={css`
        margin-left: 60px;
      `}
    />
    <div className="cards">
      <div className="button">
        <img src="/svg/left.svg" alt="left" />
      </div>
      <CardContainer item={mockData.length}>
        {mockData.map(event => (
          <EventCard key={event.name} event={event} />
        ))}
      </CardContainer>
      <div className="button">
        <img src="/svg/right.svg" alt="right" />
      </div>
    </div>
    <Navigation>
      <div>
        <Pagination className="selected" />
        <Pagination />
        <Pagination />
        <Pagination />
      </div>
    </Navigation>
  </Container>
)

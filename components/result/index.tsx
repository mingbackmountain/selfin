import { css } from "@emotion/core"

import { SectionTitle } from "../section-title"
import { Pagination } from "../../styles/pagination"

import { Container, CardContainer, Card, Navigation } from "./styles/result"

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
      <CardContainer>
        <Card>
          <img
            className="event-image"
            src="/images/s-1450016.png"
            alt="event"
          />
          <div className="event-description">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <p>
              <img
                src="/images/facebook-placeholder-for-locate-places-on-maps.png"
                alt="location"
              />
              Lorem ipsum
            </p>
            <p>
              <img src="/images/clock-circular-outline.png" alt="time" />
              Lorem ipsum
            </p>
            <div className="button-container">
              <button>590 บาท</button>
            </div>
          </div>
        </Card>
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

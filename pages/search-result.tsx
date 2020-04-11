import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import { NearbyEventForm } from "../components/search-bar"
import { SectionTitle } from "../components/section-title"
import { Info } from "../components/info"
import { Pagination } from "../styles/pagination"

const Result = styled.div`
  background-color: #ffc626;
  margin: 0 0 20px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
  }

  .cards {
    display: flex;
  }
`

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 60px;
`

const Card = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 30px;

  > img {
    width: 100%;
  }

  > .event-description {
    padding: 20px 40px;
  }

  h1 {
    margin: 0;
    font-size: 24px;
    text-align: center;
  }

  p {
    display: flex;
    align-items: center;

    img {
      width: 19px;
      height: 19px;
      margin-right: 30px;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      border-radius: 40px;
      background-color: #50bf8a;
      font-size: 24px;
      color: #fff;
      width: 200px;
    }
  }
`

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 20px;
  margin-top: 20px;

  div {
    display: flex;
  }
`

const SearchResult: React.FC = () => {
  return (
    <Layout
      style={css`
        background-color: #ffc626;
      `}
    >
      <Banner />

      <NearbyEventForm />

      <Result>
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
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
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
      </Result>

      <Info
        usingBackground={false}
        style={css`
          padding: 20px 0;

          img {
            width: 100px;
            height: 100px;
          }

          @media screen and (min-width: 1025px) {
            padding: 30px 0;
          }
        `}
      />
    </Layout>
  )
}

export default SearchResult

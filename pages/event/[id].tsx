import { NextPage } from "next"
import Head from "next/head"
import { css } from "@emotion/core"
import Axios from "axios"
import Showdown from "showdown"

import { Layout } from "../../components/layout"
import { Banner, MobileBanner } from "../../components/banner"
import { NameSection, MobileNameSection } from "../../components/name-section"
import { EventDescription } from "../../components/event-description"
import { Location } from "../../components/location"
import { CustomEvent } from "../../components/event"
import { SectionTitle } from "../../components/section-title"
import { PagePadding } from "../../styles/container"

import { ResponseFromServer, Event } from "../../components/event/types"

const EventPage: NextPage<{ isMobile: boolean; event: Event | undefined }> = ({
  isMobile,
  event,
}) => {
  const markdown = new Showdown.Converter()

  return event ? (
    <Layout>
      <Head>
        <title>Selfin | {event.name}</title>
      </Head>

      {isMobile ? (
        <>
          <MobileBanner imgUrl="/images/289308-P6O0H1-96.png" />
          <MobileNameSection
            event={{
              name: event.name,
              date: event.time,
              location: event.place,
              price: event.price,
            }}
          />
        </>
      ) : (
        <>
          <Banner imgUrl="/images/S__1450016.png" />
          <NameSection
            event={{
              name: event.name,
              date: event.time,
              location: event.place,
              price: event.price,
            }}
          />
        </>
      )}

      <EventDescription desc={markdown.makeHtml(event.description)} />

      <Location />

      <CustomEvent
        text="กิจกรรมที่ใกล้เคียงกัน"
        style={css`
          ${PagePadding({ topAndBottom: 20 })}
          background: #f7f7f7;

          @media screen and (max-width: 768px) {
            display: none;
          }
        `}
      />

      <div
        css={css`
          background: #6ace9e;
          box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.16);
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transform: translateY(9%);

          @media screen and (min-width: 769px) {
            display: none;
          }

          button {
            margin: 30px 0;
            padding: 5px 50px;
            font-size: 20px;
            font-weight: 300;
            background-color: #f23318;
            border: transparent;
            border-radius: 40px;

            a {
              color: #fff;
              text-decoration: none;
            }
          }
        `}
      >
        <SectionTitle
          style={css`
            display: flex;
            flex-flow: column;
            align-items: center;
            color: #fff;

            div {
              background: #ffba00;
            }
          `}
          title="บัตรเข้าร่วมกิจกรรม"
        />

        <button>
          <a href="https://www.facebook.com/contact.selfin/">จองตอนนี้</a>
        </button>
      </div>
    </Layout>
  ) : (
    <div>loading</div>
  )
}

EventPage.getInitialProps = async ctx => {
  const isMobile = (ctx?.req?.headers["user-agent"]
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    ? true
    : false

  const config = ctx.req ? { baseURL: "http://localhost:3000" } : {}

  const { data: response } = await Axios.get<ResponseFromServer>(
    "/api/event",
    config
  )

  const event = response.data.find(event => event.id === ctx.query.id)

  return { isMobile, event }
}

export default EventPage

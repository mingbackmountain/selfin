import { NextPage } from "next"
import Head from "next/head"
import { css } from "@emotion/core"

import { Layout } from "../components/layout"
import { Banner, MobileBanner } from "../components/banner"
import {
  NearbyEventForm,
  MobileNearbyEventForm,
} from "../components/search-bar"
import { Events } from "../components/event"
import { Promotion } from "../components/promotion"
import { Info, MobileInfo } from "../components/info"
import { Blog } from "../components/blog"

const HomePage: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <Layout>
      <Head>
        <title>Selfin</title>
      </Head>

      {isMobile ? (
        <>
          <MobileBanner imgUrl="/images/289308-P6O0H1-96.png" />
          <MobileNearbyEventForm />
        </>
      ) : (
        <>
          <Banner imgUrl="/images/cover.png" />
          <NearbyEventForm />
        </>
      )}

      <Events
        style={css`
          margin: 20px 0;
        `}
        text="กิจกรรมที่น่าสนใจในเดือนนี้"
      />

      <Promotion />

      {isMobile ? (
        <MobileInfo
          usingBackground={true}
          style={css`
            padding: 20px 0 50px;

            @media screen and (min-width: 1025px) {
              padding: 30px 0 100px;
            }
          `}
        />
      ) : (
        <Info
          usingBackground={true}
          style={css`
            padding: 20px 0 50px;

            @media screen and (min-width: 1025px) {
              padding: 30px 0 100px;
            }
          `}
        />
      )}

      <Blog
        style={css`
          margin: 60px 0;
        `}
      />
    </Layout>
  )
}

HomePage.getInitialProps = ctx => {
  const isMobile = (ctx?.req?.headers["user-agent"]
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    ? true
    : false

  return { isMobile }
}

export default HomePage

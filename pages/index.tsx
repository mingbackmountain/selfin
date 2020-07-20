import { NextPage } from "next"
import Head from "next/head"
import { css } from "@emotion/core"

import { Layout } from "../components/layout"
import { Mobile, Desktop } from "../components/layout/size"
import { Banner, MobileBanner } from "../components/banner"
import {
  NearbyEventForm,
  MobileNearbyEventForm,
} from "../components/search-bar"
import { Events } from "../components/event"
import { Promotion } from "../components/promotion"
import { Info, MobileInfo } from "../components/info"

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Selfin</title>
      </Head>

      {/* On mobile */}
      <Mobile>
        <MobileBanner />
        <MobileNearbyEventForm />
      </Mobile>

      {/* On desktop */}
      <Desktop>
        <Banner imgUrl="/images/cover.png" />
        <NearbyEventForm />
      </Desktop>

      <Events
        style={css`
          margin: 20px 0;
        `}
        text="กิจกรรมที่น่าสนใจในเดือนนี้"
      />

      {/* <Promotion /> */}

      {/* On mobile */}
      <Mobile>
        <MobileInfo
          usingBackground={false}
          style={css`
            padding: 20px 0 50px;

            @media screen and (min-width: 1025px) {
              padding: 30px 0 100px;
            }
          `}
        />
      </Mobile>

      {/* On desktop */}
      <Desktop>
        <Info
          usingBackground={false}
          style={css`
            padding: 20px 0 50px;

            @media screen and (min-width: 1025px) {
              padding: 30px 0 100px;
            }
          `}
        />
      </Desktop>
    </Layout>
  )
}

export default HomePage

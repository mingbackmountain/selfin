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
import { Blog } from "../components/blog"

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Selfin</title>
      </Head>

      {/* On mobile */}
      <Mobile>
        <MobileBanner imgUrl="/images/289308-P6O0H1-96.png" />
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

      <Promotion />

      {/* On mobile */}
      <Mobile>
        <MobileInfo
          usingBackground={true}
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
          usingBackground={true}
          style={css`
            padding: 20px 0 50px;

            @media screen and (min-width: 1025px) {
              padding: 30px 0 100px;
            }
          `}
        />
      </Desktop>

      <Blog
        style={css`
          margin: 60px 0;
        `}
      />
    </Layout>
  )
}

export default HomePage

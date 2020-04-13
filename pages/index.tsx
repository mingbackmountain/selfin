import { css } from "@emotion/core"

import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import { NearbyEventForm } from "../components/search-bar"
import { Events } from "../components/event"
import { Promotion } from "../components/promotion"
import { Info } from "../components/info"
import { Blog } from "../components/blog"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Banner imgUrl="/images/cover.png" />

      <NearbyEventForm />

      <Events text="กิจกรรมที่น่าสนใจในเดือนนี้" />

      <Promotion />

      <Info
        usingBackground={true}
        style={css`
          padding: 20px 0 50px;

          @media screen and (min-width: 1025px) {
            padding: 30px 0 100px;
          }
        `}
      />

      <Blog
        style={css`
          margin-bottom: 60px;
        `}
      />
    </Layout>
  )
}

export default HomePage

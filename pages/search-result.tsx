import { NextPage } from "next"
import { css } from "@emotion/core"

import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import {
  NearbyEventForm,
  MobileNearbyEventForm,
} from "../components/search-bar"
import { Result } from "../components/result"
import { Info } from "../components/info"

const SearchResult: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <Layout>
      <Banner
        style={css`
          @media screen and (max-width: 768px) {
            display: none;
          }
        `}
        imgUrl="/images/cover.png"
      />

      {isMobile ? (
        <MobileNearbyEventForm
          style={css`
            margin-top: 100px;
          `}
        />
      ) : (
        <NearbyEventForm />
      )}

      <Result isMobile={isMobile} />

      <Info
        usingBackground={false}
        style={css`
          padding: 20px 0;
          display: none;
          background: #fafafa;

          img {
            width: 100px !important;
            height: 100px !important;
          }

          @media screen and (min-width: 769px) {
            display: block;
          }

          @media screen and (min-width: 1025px) {
            padding: 30px 0;
          }

          @media screen and (min-width: 1441px) {
            img {
              width: 100px;
              height: 100px;
            }
          }
        `}
      />
    </Layout>
  )
}

SearchResult.getInitialProps = ctx => {
  const isMobile = (ctx?.req?.headers["user-agent"]
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    ? true
    : false

  return { isMobile }
}

export default SearchResult

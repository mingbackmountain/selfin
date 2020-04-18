import { NextPage } from "next"
import { css } from "@emotion/core"
import Axios from "axios"

import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import {
  NearbyEventForm,
  MobileNearbyEventForm,
} from "../components/search-bar"
import { Result } from "../components/result"
import { Info } from "../components/info"

import { ResponseFromServer, Event } from "../components/event/types"

const SearchResult: NextPage<{ isMobile: boolean; result: Event[] }> = ({
  isMobile,
  result,
}) => {
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

      <Result result={result} isMobile={isMobile} />

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

SearchResult.getInitialProps = async ctx => {
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

  const query = ctx.query

  const result = response.data.filter(
    event =>
      event.info.type.includes(query.eventType as string) ||
      event.info.addressCode === query.district ||
      event.info.month === query.month
  )

  return { isMobile, result }
}

export default SearchResult

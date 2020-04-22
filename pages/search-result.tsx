import { NextPage } from "next"
import Head from "next/head"
import { css } from "@emotion/core"
import Axios from "axios"

import { Layout } from "../components/layout"
import { Mobile, Desktop } from "../components/layout/size"
import { Banner } from "../components/banner"
import {
  NearbyEventForm,
  MobileNearbyEventForm,
} from "../components/search-bar"
import { Result } from "../components/result"
import { Info } from "../components/info"

import { ResponseFromServer, Event } from "../components/event/types"

const SearchResult: NextPage<{ result: Event[] }> = ({ result }) => {
  return (
    <Layout>
      <Head>
        <title>Selfin | Search Result</title>
      </Head>

      <Banner
        style={css`
          @media screen and (max-width: 768px) {
            display: none;
          }
        `}
        imgUrl="/images/cover.png"
      />

      <Mobile>
        <MobileNearbyEventForm
          style={css`
            margin-top: 100px;
          `}
        />
      </Mobile>

      <Desktop>
        <NearbyEventForm />
      </Desktop>

      <Result result={result} />

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
  const config = ctx.req ? { baseURL: "https://selfin.co" } : {}

  const { data: response } = await Axios.get<ResponseFromServer>(
    "/api/event",
    config
  )

  const query = ctx.query

  const result = response.data.filter(
    event =>
      event.info.type.includes(query.eventType as string) ||
      event.info.addressCode === query.district
  )

  return { result }
}

export default SearchResult

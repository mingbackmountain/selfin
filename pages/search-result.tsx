import { css } from "@emotion/core"

import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import { NearbyEventForm } from "../components/search-bar"
import { Result } from "../components/result"
import { Info } from "../components/info"

const SearchResult: React.FC = () => {
  return (
    <Layout
      style={css`
        background-color: #ffc626;
      `}
    >
      <Banner />

      <NearbyEventForm />

      <Result />

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

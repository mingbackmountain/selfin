import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import { NameSection } from "../components/name-section"
import { css } from "@emotion/core"

import { EventDescription } from "../components/event-description"
import { Location } from "../components/location"
import { CustomEvent } from "../components/event"

export default function Description() {
  return (
    <Layout>
      <Banner imgUrl="/images/S__1450016.png" />
      <NameSection />
      <EventDescription />
      <Location />
      <CustomEvent
        text="กิจกรรมที่ใกล้เคียงกัน"
        style={css`
          padding: 50px 120px;
          background: #f7f7f7;
        `}
      />
    </Layout>
  )
}

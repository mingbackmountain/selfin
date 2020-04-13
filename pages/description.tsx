import { Layout } from "../components/layout"
import { Banner } from "../components/banner"
import { NameSection } from "../components/name-section"
import { EventDescription } from "../components/event-description"
import { Location } from "../components/location"
import { Events } from "../components/event"

export default function Description() {
  return (
    <Layout>
      <Banner imgUrl="/images/S__1450016.png" />
      <NameSection />
      <EventDescription />
      <Location />
      <Events text="กิจกรรมที่ใกล้เคียงกัน" />
    </Layout>
  )
}

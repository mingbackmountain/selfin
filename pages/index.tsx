import { Banner } from "../components/Banner"
import { NearbyEventForm } from "../components/NearbyEvent"
import { Events } from "../components/event"
import { Layout } from "../components/Layout"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Banner />

      <NearbyEventForm />

      <Events text="กิจกรรมที่น่าสนใจในเดือนนี้" />
    </Layout>
  )
}

export default HomePage

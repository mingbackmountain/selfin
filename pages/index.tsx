import { Layout } from "../components/Layout"
import { Banner } from "../components/Banner"
import { NearbyEventForm } from "../components/NearbyEvent"
import { Events } from "../components/event"
import { Blog } from "../components/blog"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Banner />

      <NearbyEventForm />

      <Events text="กิจกรรมที่น่าสนใจในเดือนนี้" />

      <Blog />
    </Layout>
  )
}

export default HomePage

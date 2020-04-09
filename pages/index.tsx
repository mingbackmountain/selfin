import { Layout } from "../components/Layout"
import { Banner } from "../components/banner"
import { NearbyEventForm } from "../components/search-bar"
import { Events } from "../components/event"
import { Promotion } from "../components/promotion"
import { Info } from "../components/info"
import { Blog } from "../components/blog"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Banner />

      <NearbyEventForm />

      <Events text="กิจกรรมที่น่าสนใจในเดือนนี้" />

      <Promotion />

      <Info />

      <Blog />
    </Layout>
  )
}

export default HomePage

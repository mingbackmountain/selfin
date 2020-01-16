import React from "react"

import { Banner } from "../components/Banner"
import { NearbyEventForm } from "../components/NearbyEvent"
import { Events } from "../components/Event"
import { Description } from "../components/Description"
import { Test } from "../components/Test"
import { Blog } from "../components/Blog"
import { Footer } from "../components/Footer"

export const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      {/* <NearbyEventForm />
      <Events isRecommend={true} text="กิจกรรมที่น่าสนใจในเดือนนี้" />
      <Description />
      <Test />
      <Events isRecommend={false} text="กิจกรรมที่ใช่สำหรับลูกของคุณ" />
      <Blog />
      <Footer /> */}
    </div>
  )
}

import React from "react"

import { Banner } from "../components/Banner"
import { NearbyEventForm } from "../components/NearbyEvent"
import { Events } from "../components/Event"
import { Description } from "../components/Description"
import { Test } from "../components/Test"

export const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <NearbyEventForm />
      <Events />
      <Description />
      <Test />
    </div>
  )
}

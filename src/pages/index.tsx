import React from "react"

import { Banner } from "../components/Banner"
import { NearbyEventForm } from "../components/NearbyEvent"
import { Events } from "../components/Event"
import { Description } from "../components/description"

export const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <NearbyEventForm />
      <Events />
      <Description />
    </div>
  )
}

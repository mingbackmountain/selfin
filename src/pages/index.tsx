import React from "react"

import { Banner } from "../components/Banner"
import { NearbyEventForm } from "../components/NearbyEvent"

export const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <NearbyEventForm />
      home
    </div>
  )
}

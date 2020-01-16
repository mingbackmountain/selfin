import React, { useContext } from "react"

import { asset } from "../contexts/asset"

import { EventInfoText } from "../styles/event"

import { EventInfoProps } from "../interfaces/event"

export const EventInfo: React.FC<EventInfoProps> = ({ placeName, time }) => {
  const { placeAt, timeAt } = useContext(asset)
  return (
    <EventInfoText>
      <img src={placeName ? placeAt : timeAt} alt="Event Info" />
      {placeName ? placeName : time}
    </EventInfoText>
  )
}

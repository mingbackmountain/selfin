import { EventInfoText } from "./styles/event"

import { EventInfoProps } from "./types"

export const EventInfo: React.FC<EventInfoProps> = ({ placeName, time }) => {
  return (
    <EventInfoText>
      <img
        src={
          placeName
            ? "/images/facebook-placeholder-for-locate-places-on-maps.png"
            : "/images/clock-circular-outline.png"
        }
        alt="Event Info"
      />
      {placeName ? placeName : time}
    </EventInfoText>
  )
}

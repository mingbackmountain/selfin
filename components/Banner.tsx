import React from "react"

import { BannerContainer, SlideButton } from "../styles/banner"

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <SlideButton src="/images/prev.png" isLeft={true} />
      <img
        className="banner"
        src="/images/cover.png"
        srcSet={`/images/cover@2x.png, /images/cover@3x.png`}
        alt="banner"
      />
      <SlideButton src="/images/next.png" isLeft={false} />
    </BannerContainer>
  )
}

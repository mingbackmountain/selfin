import React, { useContext } from "react"

import { asset } from "../contexts/asset"

import { BannerContainer, SlideButton, Text } from "../styles/banner"

export const Banner: React.FC = () => {
  const { banner, banner_2x, banner_3x, next, prev } = useContext(asset)

  return (
    <BannerContainer>
      <SlideButton src={prev} isLeft={true} />
      <img
        className="banner"
        src={banner}
        srcSet={`${banner_2x}, ${banner_3x}`}
        alt="banner"
      />
      <Text>
        discount
        <br />
        for 50%
      </Text>
      <SlideButton src={next} isLeft={false} />
    </BannerContainer>
  )
}

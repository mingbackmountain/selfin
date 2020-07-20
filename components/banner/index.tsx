import React, { useState } from "react"
import { BannerContainer } from "./styles/banner"
import { BannerProps } from "./types"
import { CSSProps } from "../layout/types"
import Slider from "react-slick"

export const MobileBanner = () => {
  const slideImages = [
    "images/slider_mobile/cc.png",
    "images/slider_mobile/covid-rs-01.png",
    "images/slider_mobile/res-22-01.png",
  ]

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    centerPadding: "50px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img src={slideImages[0]} />
        </div>
        <div>
          <img src={slideImages[1]} />
        </div>
        <div>
          <img src={slideImages[2]} />
        </div>
      </Slider>
    </div>
  )
}

export const Banner: React.FC<BannerProps & CSSProps> = ({ imgUrl, style }) => {
  return (
    <BannerContainer css={style}>
      <img className="banner" src={imgUrl} alt="banner" />
    </BannerContainer>
  )
}

// export const MobileBanner: React.FC<BannerProps & CSSProps> = ({
//   imgUrl,
//   style,
// }) => {
//   return (
//     <BannerContainer css={style}>
//       <img className="banner" src={imgUrl} alt="banner" />
//     </BannerContainer>
//   )
// }

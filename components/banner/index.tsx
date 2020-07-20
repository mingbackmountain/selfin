import React from "react"
import { BannerContainer } from "./styles/banner"
import { BannerProps } from "./types"
import { CSSProps } from "../layout/types"
import Slider from "react-slick"
import styled from "@emotion/styled"

export const MobileBanner = () => {
  const slideImages = [
    "images/slider_mobile/cc.png",
    "images/slider_mobile/covid-rs-01.png",
    "images/slider_mobile/res-22-01.png",
  ]

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div
      style={{
        marginTop: "87px",
        marginBottom: "30px",
      }}
    >
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

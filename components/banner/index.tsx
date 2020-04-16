import { BannerContainer, SlideButton } from "./styles/banner"

import { BannerProps } from "./types"
import { CSSProps } from "../layout/types"

export const Banner: React.FC<BannerProps & CSSProps> = ({ imgUrl, style }) => {
  return (
    <BannerContainer css={style}>
      <SlideButton src="/images/prev.png" isLeft={true} />
      <img className="banner" src={imgUrl} alt="banner" />
      <SlideButton src="/images/next.png" isLeft={false} />
    </BannerContainer>
  )
}

export const MobileBanner: React.FC<BannerProps & CSSProps> = ({
  imgUrl,
  style,
}) => {
  return (
    <BannerContainer css={style}>
      <div>แหล่งรวมกิจกรรมเพื่อพัฒนาเด็ก ADHD</div>
      <img className="banner" src={imgUrl} alt="banner" />
    </BannerContainer>
  )
}

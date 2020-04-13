import { BannerContainer, SlideButton } from "./styles/banner"

import { BannerProps } from "./types"

export const Banner: React.FC<BannerProps> = ({ imgUrl }) => {
  return (
    <BannerContainer>
      <SlideButton src="/images/prev.png" isLeft={true} />
      <img className="banner" src={imgUrl} alt="banner" />
      <SlideButton src="/images/next.png" isLeft={false} />
    </BannerContainer>
  )
}

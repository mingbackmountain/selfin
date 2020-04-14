import { Title, Subtitle } from "./styles/section-title"
import { UnderLine } from "../../styles/underline"

import { SectionTitleProps } from "./types"
import { CSSProps } from "../layout/types"

export const SectionTitle: React.FC<SectionTitleProps & CSSProps> = ({
  title,
  style,
}) => (
  <Title css={style}>
    <h1>{title}</h1>
    <UnderLine color="red" />
  </Title>
)

export const SectionSubtitle: React.FC<SectionTitleProps & CSSProps> = ({
  title,
  style,
}) => (
  <Subtitle css={style}>
    <h2>{title}</h2>
    <UnderLine color="red" />
  </Subtitle>
)

export const TitleWithYellowLine: React.FC<SectionTitleProps & CSSProps> = ({
  title,
}) => {
  return (
    <h1>
      {title}
      <UnderLine color="yellow" />
    </h1>
  )
}

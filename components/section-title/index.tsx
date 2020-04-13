import { Title, Subtitle } from "./styles/section-title"
import { RedLine } from "../../styles/red-headline"

import { SectionTitleProps } from "./types"
import { CSSProps } from "../layout/types"

export const SectionTitle: React.FC<SectionTitleProps & CSSProps> = ({
  title,
  style,
}) => (
  <Title css={style}>
    <h1>{title}</h1>
    <RedLine />
  </Title>
)

export const SectionSubtitle: React.FC<SectionTitleProps & CSSProps> = ({
  title,
  style,
}) => (
  <Subtitle css={style}>
    <h2>{title}</h2>
    <RedLine />
  </Subtitle>
)

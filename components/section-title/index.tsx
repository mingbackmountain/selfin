import { Title } from "./styles/section-title"
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

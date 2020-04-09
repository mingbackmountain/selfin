import { Title, RedLine } from "./styles/promotion"

import { SectionTitleProps } from "./types"

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <Title>
    <h1>{title}</h1>
    <RedLine />
  </Title>
)

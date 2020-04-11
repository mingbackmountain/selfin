import { Title } from "./styles/promotion"
import { RedLine } from "../../styles/red-headline"

import { SectionTitleProps } from "./types"

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <Title>
    <h1>{title}</h1>
    <RedLine />
  </Title>
)

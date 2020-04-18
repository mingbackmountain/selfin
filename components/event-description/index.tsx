import { css } from "@emotion/core"

import { SectionTitle } from "../section-title"

import { DescriptionContainer } from "./styles/event-description"
import { PagePadding } from "../../styles/container"

interface DescriptionProps {
  desc: string
}

export const EventDescription: React.FC<DescriptionProps> = ({ desc }) => (
  <DescriptionContainer css={PagePadding({ topAndBottom: 20 })}>
    <SectionTitle
      style={css`
        @media screen and (max-width: 768px) {
          div {
            background: #ffba00;
          }
        }
      `}
      title="ความน่าสนใจของกิจกรรม"
    />
    <p>{desc}</p>
  </DescriptionContainer>
)

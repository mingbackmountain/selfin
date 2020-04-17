import { css } from "@emotion/core"

import { SectionTitle } from "../section-title"

import { DescriptionContainer } from "./styles/event-description"
import { PagePadding } from "../../styles/container"

export const EventDescription = () => (
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
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    </p>
  </DescriptionContainer>
)

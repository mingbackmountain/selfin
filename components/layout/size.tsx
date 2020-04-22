import { css } from "@emotion/core"

export const Mobile: React.FC = ({ children }) => (
  <div
    css={css`
      display: block;

      @media screen and (min-width: 769px) {
        display: none;
      }
    `}
  >
    {children}
  </div>
)

export const Desktop: React.FC = ({ children }) => (
  <div
    css={css`
      display: none;

      @media screen and (min-width: 769px) {
        display: block;
      }
    `}
  >
    {children}
  </div>
)

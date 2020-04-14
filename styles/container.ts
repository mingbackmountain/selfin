import { css, SerializedStyles } from "@emotion/core"
import styled from "@emotion/styled"

export const Container = styled.div`
  margin: auto 10px;

  @media screen and (min-width: 600px) {
    margin: auto 60px;
  }
`

export function PagePadding(sizes?: { topAndBottom: number }): SerializedStyles
export function PagePadding(sizes?: {
  top: number
  bottom: number
}): SerializedStyles
export function PagePadding(sizes?: any): any {
  if (sizes) {
    if (
      (sizes as {
        top: number
        bottom: number
      }).top
    ) {
      const padding = changeValueToPixel(
        sizes as { top: number; bottom: number }
      )

      return css`
        padding: ${padding.top} 20px ${padding.bottom};

        @media screen and (min-width: 1024px) {
          padding: ${padding.top} 120px ${padding.bottom};
        }
      `
    }

    const padding = changeValueToPixel(sizes)

    return css`
      padding: ${padding.topAndBottom} 20px;

      @media screen and (min-width: 1024px) {
        padding: ${padding.topAndBottom} 120px;
      }
    `
  }

  return css`
    padding: 0 20px;

    @media screen and (min-width: 1024px) {
      padding: 0 120px;
    }
  `
}

function changeValueToPixel(size: {
  topAndBottom: number
}): { topAndBottom: string }
function changeValueToPixel(size: {
  top: number
  bottom: number
}): { top: string; bottom: string }
function changeValueToPixel(size: any): any {
  const newObject: { [key: string]: string } = {}

  for (let [key, value] of Object.entries(size)) {
    newObject[key] = `${value}px`
  }

  return newObject
}

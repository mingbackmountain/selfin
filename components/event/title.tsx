import { LongerYellowHeadline } from "../../styles/yellow-headline"

import { TitleProps } from "./types"

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1>
      {text}
      <LongerYellowHeadline />
    </h1>
  )
}

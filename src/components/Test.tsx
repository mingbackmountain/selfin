import React, { useContext } from "react"

import { asset } from "../contexts/asset"

import { TestSection, DescriptionContainer } from "../styles/test"
import { YellowHeadline } from "../styles/yellow-headline"

export const Test: React.FC = () => {
  const { kidWithAsses } = useContext(asset)

  return (
    <TestSection>
      <div>
        <img src={kidWithAsses} alt="kid with asses" />
      </div>
      <DescriptionContainer>
        <h1>
          แบบประเมินความเสี่ยง
          <YellowHeadline />
        </h1>
        <h2>ระบบประเมินความเสี่ยงจะเปิดให้บริการเร็วๆนี้</h2>
      </DescriptionContainer>
    </TestSection>
  )
}

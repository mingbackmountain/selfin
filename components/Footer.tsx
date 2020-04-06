import React, { useContext } from "react"

import { Container } from "../styles/container"
import { FooterContainer, LeftSection, RightSection } from "../styles/footer"

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <LeftSection>
          <img src="/images/white.png" alt="white logo" />
          <p>
            We believe every kid has Potential.
            <br />
            We offer a wide range of classes from
            <br />
            20+ fields of interest especially for your kids.
          </p>
        </LeftSection>
        <RightSection>
          <h6>ADDRESS</h6>
          <p>
            999 Phutthamonthon Sai 4 Rd, Salaya,
            <br />
            Phutthamonthon District, Nakhon Pathom 73170
            <br />
            <br />
            Email: Sparkspace.edu.com
            <br />
            <br />
            Call: +66-987654321
          </p>
        </RightSection>
      </Container>
    </FooterContainer>
  )
}

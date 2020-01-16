import React, { useContext } from "react"

import { asset } from "../contexts/asset"

import { Container } from "../styles/container"
import { FooterContainer } from "../styles/footer"

export const Footer: React.FC = () => {
  const { whiteLogo, fbLogo, instagramLogo } = useContext(asset)

  return (
    <FooterContainer>
      <Container>
        <img src={whiteLogo} alt="white logo" />
        <div>
          <div>
            ติดตามเราได้ที่ <img src={fbLogo} alt="fb logo" />{" "}
            <img src={instagramLogo} alt="instagram logo" />
          </div>
          <div>contact.selfin@gmail.com</div>
        </div>
      </Container>
    </FooterContainer>
  )
}

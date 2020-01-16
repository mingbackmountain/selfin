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
          <p>
            ติดตามเราได้ที่{" "}
            <span className="social">
              <img src={fbLogo} alt="fb logo" />{" "}
              <img src={instagramLogo} alt="instagram logo" />
            </span>
          </p>
          <p>contact.selfin@gmail.com</p>
        </div>
      </Container>
    </FooterContainer>
  )
}

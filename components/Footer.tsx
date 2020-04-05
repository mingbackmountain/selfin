import React, { useContext } from "react"

import { Container } from "../styles/container"
import { FooterContainer } from "../styles/footer"

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <img src="/images/white.png" alt="white logo" />
        <div>
          <p>
            ติดตามเราได้ที่{" "}
            <span className="social">
              <img src="/images/f-logo-rgb-blue-144.png" alt="fb logo" />{" "}
              <img src="/images/instagram.png" alt="instagram logo" />
            </span>
          </p>
          <p>contact.selfin@gmail.com</p>
        </div>
      </Container>
    </FooterContainer>
  )
}

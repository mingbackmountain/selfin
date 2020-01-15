import React, { useContext } from "react"

import { LogoContainer } from "../styles/navbar"

import { asset } from "../contexts/asset"

export const Logo: React.FC = () => {
  const { blackLogo, blackLogo_2x, blackLogo_3x } = useContext(asset)

  return (
    <LogoContainer>
      <img
        src={blackLogo}
        srcSet={`${blackLogo_2x}, ${blackLogo_3x}`}
        alt="selfin logo"
      />
    </LogoContainer>
  )
}

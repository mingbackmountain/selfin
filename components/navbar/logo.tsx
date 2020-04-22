import { LogoContainer } from "./styles/navbar"

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <img
        src="/images/black.png"
        srcSet={`/images/black@2x.png, /images/black@3x.png`}
        alt="selfin logo"
      />
    </LogoContainer>
  )
}

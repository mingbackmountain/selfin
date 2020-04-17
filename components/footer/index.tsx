import { useRouter } from "next/router"
import styled from "@emotion/styled"

import { PagePadding } from "../../styles/container"
import { FooterContainer, LeftSection, RightSection } from "./styles/footer"

const MainFooter = styled.div`
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  @media screen and (min-width: 769px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
`

const MobileFooter = styled.div`
  width: 100vw;

  .svg {
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    transform: translateY(8%);

    img {
      width: 100%;
    }

    h1 {
      position: absolute;
      bottom: -10px;
      left: 0;
      z-index: 1;
      ${PagePadding({ topAndBottom: 20 })}
      margin: 0;
      font-size: 13px;

      @media screen and (min-width: 426px) {
        bottom: 10px;
        font-size: 16px;
      }
    }
  }

  .contact {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #ffba00;

    p {
      font-size: 11px;
      margin: 0;
      padding-right: 10px;
    }

    div {
      display: flex;
      align-items: flex-end;

      img {
        width: 79px;
        height: 39px;
      }
    }
  }
`

export const Footer: React.FC = () => {
  const router = useRouter()

  return (
    <MainFooter>
      <MobileFooter className="mobile">
        <div className="svg">
          <h1>ติดต่อเรา</h1>
          <img
            src={
              router.pathname === "/description"
                ? "/svg/ticket.svg"
                : "/svg/footer.svg"
            }
          />
        </div>
        <div className="contact" css={PagePadding({ topAndBottom: 20 })}>
          <p>
            Email: Sparkspace.edu.com
            <br />
            Call: +66-987654321
            <br />
            999 Phutthamonthon Sai 4 Rd, Salaya,
            <br />
            Phutthamonthon District, Nakhon Pathom 73170
          </p>
          <div>
            <img src="/images/white.png" />
          </div>
        </div>
      </MobileFooter>
      <FooterContainer className="desktop">
        <div css={PagePadding()}>
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
        </div>
      </FooterContainer>
    </MainFooter>
  )
}

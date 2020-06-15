import { useRouter } from "next/router"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

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

const UnderLine = styled.div`
  width: 85%;
  height: 2px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 100px;
  background-color: #f2d600;
  border-radius: 40px;

  @media screen and (min-width: 769px) {
    height: 2px;
  }
`

export const Footer: React.FC = () => {
  const router = useRouter()

  return (
    <MainFooter id="footer">
      <MobileFooter className="mobile">
        <div className="svg">
          <h1>ติดต่อเรา</h1>
          <img
            src={
              router.pathname === "/event/[id]"
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
            <h6>Selfin</h6>
            <p>
              We believe every kid has potential.
              <br />
              We offer a wide range of classes from
              <br />
              20+ fields of interest especially for your kids.
            </p>
          </LeftSection>

          <RightSection>
            <h6>Contact</h6>
            <p>
              Email: contact.selfin@gmail.com
              <br />
              Phone: 089 417 6886
              <br />
              999 Phutthamonthon Sai 4 Rd, Salaya,
              <br />
              Phutthamonthon District, Nakhon Pathom 73170
            </p>
          </RightSection>
        </div>
        <div css={PagePadding()}>
          <UnderLine />
        </div>
        <div css={PagePadding()}>
          <LeftSection>
            <p>Selfin, Inc. 2020</p>
          </LeftSection>
          <RightSection>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <a
              css={css`
                color: #fff;
                margin-left: 10px;
                text-decoration: none;
              `}
              href="https://www.facebook.com/contact.selfin/"
            >
              Selfin - Family Playground
            </a>
          </RightSection>
        </div>
      </FooterContainer>
    </MainFooter>
  )
}

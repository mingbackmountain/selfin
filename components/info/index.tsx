import { TitleWithYellowLine } from "../section-title/index"

import {
  InfoContainer,
  WrapContainer,
  Card,
  TextSection,
  TextLable,
} from "./styles/info"

import { InfoContainerProps } from "./types"
import { CSSProps } from "../layout/types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const UnderLine = styled.div`
  width: 12%;
  margin: 0 auto;
  background-color: #f2d600;
  border-radius: 40px;

  @media screen and (min-width: 769px) {
    height: 4px;
  }
`

export const Info: React.FC<InfoContainerProps & CSSProps> = ({
  usingBackground,
  style,
}) => (
  <InfoContainer usingBackground={usingBackground} css={style}>
    <div>
      <h1 className="title">บริการของเรา</h1>
      <UnderLine />
    </div>
    <div
      css={css`
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        margin-left: 220px;
        margin-right: 220px;
      `}
    >
      <TextLable>เร็วๆนี้</TextLable>
      <TextLable>เร็วๆนี้</TextLable>
    </div>
    <WrapContainer>
      <Card>
        <img src="/images/list.png" />
        <TextSection backgroundColor="#73bc99">
          <h1>แบบประเมินออนไลน์</h1>
          <p>
            ทดลองทำแบบทดสอบ
            <br />
            เพื่อประเมินพฤติกรรมของลูก
          </p>
        </TextSection>
      </Card>

      <Card>
        <img src="/images/soccer.png" />
        <TextSection backgroundColor="#fcba00">
          <h1>กิจกรรมที่แนะนำ</h1>
          <p>
            เลือกกิจกรรมที่น่าสนใจ
            <br />
            ที่ถูกคัดสรรมาเพื่อลูกคุณโดยเฉพาะ
          </p>
        </TextSection>
      </Card>

      <Card>
        <img src="/images/up.png" />
        <TextSection backgroundColor="#e84b33">
          <h1>ติดตามผล</h1>
          <p>
            ติดตามผลลัพธ์ของลูก
            <br />
            เพื่อการดูแลอย่างเหมาะสม
          </p>
        </TextSection>
      </Card>
    </WrapContainer>
  </InfoContainer>
)

export const MobileInfo: React.FC<InfoContainerProps & CSSProps> = ({
  usingBackground,
  style,
}) => (
  <InfoContainer usingBackground={usingBackground} css={style}>
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <TitleWithYellowLine
        title="บริการของเรา"
        style={css`
          display: flex;
          flex-flow: column;
          align-items: center;
        `}
      />
    </div>
    <WrapContainer>
      <Card>
        <img src="/images/list.png" />
        <TextSection backgroundColor="#73bc99">
          <h1>แบบประเมินออนไลน์</h1>
          <p>
            ทดลองทำแบบทดสอบ
            <br />
            เพื่อประเมินพฤติกรรมของลูก
          </p>
        </TextSection>
      </Card>

      <Card>
        <img src="/images/soccer.png" />
        <TextSection backgroundColor="#fcba00">
          <h1>กิจกรรมที่แนะนำ</h1>
          <p>
            เลือกกิจกรรมที่น่าสนใจ
            <br />
            ที่ถูกคัดสรรมาเพื่อลูกคุณโดยเฉพาะ
          </p>
        </TextSection>
      </Card>

      <Card>
        <img src="/images/up.png" />
        <TextSection backgroundColor="#e84b33">
          <h1>ติดตามผล</h1>
          <p>
            ติดตามผลลัพธ์ของลูก
            <br />
            เพื่อการดูแลอย่างเหมาะสม
          </p>
        </TextSection>
      </Card>
    </WrapContainer>
  </InfoContainer>
)

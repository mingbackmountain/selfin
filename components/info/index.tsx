import { TitleWithYellowLine } from "../section-title/index"

import { InfoContainer, WrapContainer, Card } from "./styles/info"

import { InfoContainerProps } from "./types"
import { CSSProps } from "../layout/types"
import { css } from "@emotion/core"

export const Info: React.FC<InfoContainerProps & CSSProps> = ({
  usingBackground,
  style,
}) => (
  <InfoContainer usingBackground={usingBackground} css={style}>
    <h1>จองกิจกรรมให้ลูกง่ายๆ</h1>
    <WrapContainer>
      <Card>
        <img src="/images/list.png" />
        <h1>แบบประเมินออนไลน์</h1>
        <p>
          ทดลองทำแบบทดสอบ
          <br />
          เพื่อประเมินพฤติกรรมของลูก
        </p>
      </Card>

      <Card>
        <img src="/images/soccer.png" />
        <h1>กิจกรรมที่แนะนำ</h1>
        <p>
          เลือกกิจกรรมที่น่าสนใจ
          <br />
          ที่ถูกคัดสรรมาเพื่อลูกคุณโดยเฉพาะ
        </p>
      </Card>

      <Card>
        <img src="/images/up.png" />
        <h1>ติดตามผล</h1>
        <p>
          ติดตามผลลัพธ์ของลูก
          <br />
          เพื่อการดูแลอย่างเหมาะสม
        </p>
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
        title="จองกิจกรรมให้ลูกง่ายๆ"
        style={css`
          display: flex;
          flex-flow: column;
          align-items: center;
          margin-bottom: 30px;
        `}
      />
    </div>
    <WrapContainer>
      <Card className="mobile">
        <img src="/images/placeholder.png" />
        <p>ค้นหากิจกรรมที่ใกล้ที่สุด</p>
      </Card>

      <Card>
        <img src="/images/soccer.png" />
        <p>กิจกรรมที่แนะนำ</p>
      </Card>

      <Card>
        <img src="/images/up.png" />
        <p>ติดตามผล</p>
      </Card>

      <Card>
        <img src="/images/list.png" />
        <p>แบบประเมินออนไลน์</p>
      </Card>
    </WrapContainer>
  </InfoContainer>
)

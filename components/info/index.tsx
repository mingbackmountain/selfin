import { InfoContainer, WrapContainer, Card } from "./styles/info"

import { InfoContainerProps } from "./types"
import { CSSProps } from "../layout/types"

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

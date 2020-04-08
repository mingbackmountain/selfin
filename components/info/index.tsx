import styled from "styled-components"

const InfoContainer = styled.div`
  margin-top: 30px;
  background: url("/images/kid.png") center center;
  background-size: cover;
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  padding: 30px 0 100px;

  h1 {
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
`

const WrapContainer = styled.div`
  display: grid;
  grid-gap: 120px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 60px;
  margin-top: 50px;
`

const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  > img {
    width: 220px;
    height: 220px;
  }

  > h1 {
    margin-bottom: 0px;
  }
`

export const Info: React.FC = () => (
  <InfoContainer>
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

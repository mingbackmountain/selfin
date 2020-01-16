import React, { useContext } from "react"

import { asset } from "../contexts/asset"

import { ADHDSection, DescriptionContainer } from "../styles/description"
import { YellowHeadline } from "../styles/yellow-headline"

export const Description: React.FC = () => {
  const { kidWithAdhd, wall } = useContext(asset)

  return (
    <ADHDSection>
      <DescriptionContainer>
        <h1>
          ADHD
          <br />
          คืออะไร?
          <YellowHeadline />
        </h1>
        <p>
          Attention Deficit Hyperactivity Disorder (ADHD)
          <br />
          คือภาวะสมาธิสั้นที่เกิดจากภาวะบกพร่องในการทำหน้าที่ของสมอง
          <br />
          อาการหลักจะมีความผิดปกติใน 3 ด้าน ได้แก่
          <br />
          1) ขาดสมาธิที่ต่อเนื่อง
          <br />
          2) ซนมากกว่าปกติหรืออยู่ไม่นิ่ง
          <br />
          3) ขาดการยั้งคิดหรือหุนหันพลันแล่น
          <br />
          โดยจะเริ่มแสดงอาการตั้งแต่ในวัยเด็ก <br />
          และส่วนใหญ่มักเป็นต่อเนื่องไปจนถึงวัยรุ่นหรือวัยผู้ใหญ่
          <br />
          หากไม่ได้รับการรักษาช่วยเหลือที่ดีจะทำให้เกิดผลกระทบต่อผู้ป่วย
          <br />
          ทั้งในด้านการเรียน อาชีพ ครอบครัว และสังคม
        </p>
        <button>อ่านต่อ</button>
      </DescriptionContainer>
      <div>
        <img src={kidWithAdhd} alt="kid with ADHD" />
        <img src={wall} alt="wall" />
        <img src={wall} alt="wall" />
      </div>
    </ADHDSection>
  )
}

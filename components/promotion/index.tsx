import Link from "next/link"
import { css } from "@emotion/core"

import { TitleWithYellowLine, SectionTitle } from "../section-title"
import { MenuItem } from "./menu-item"

import {
  Container,
  Upper,
  Menu,
  MainContent,
  LeftSection,
  Navigation,
  RightSection,
  Button,
} from "./styles/promotion"
import { PagePadding } from "../../styles/container"
import { Pagination } from "../../styles/pagination"

export const Promotion: React.FC = () => (
  <Container css={PagePadding({ topAndBottom: 60 })}>
    <Upper>
      <TitleWithYellowLine title="โปรโมชั่นประจำเดือน" />
    </Upper>

    <MainContent>
      <LeftSection></LeftSection>

      <RightSection>
        <SectionTitle
          title="กิจกรรมสุดพิเศษในช่วง Covid-19"
          style={css`
            color: #ff2004;
          `}
        />

        <p>
          เนื่องจากสถานการณ์ระบาดโควิด19 เป็นผลให้ต้องยกเลิกกิจกรรมบางประเภท
          แต่วันนี้เรามีหลากหลายกิจกรรมเสริมสร้างพัฒนาการที่คุณสามารถทำได้ที่บ้าน
          หรือPlay From Home กันได้เลย{" "}
        </p>

        <Link href="/search-result?eventType=กิจกรรมช่วงโควิด">
          <Button>อ่านต่อ</Button>
        </Link>
      </RightSection>
    </MainContent>
  </Container>
)

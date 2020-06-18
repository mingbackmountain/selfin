import Link from "next/link"
import { css } from "@emotion/core"

import { SectionTitle } from "../section-title"
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
      <SectionTitle title="โปรโมชั่นประจำเดือน" />

      <Menu>
        <MenuItem isSelected={false}>ข้อเสนอพิเศษ</MenuItem>
      </Menu>
    </Upper>

    <MainContent>
      <LeftSection>
        <Link href="/search-result?eventType=กิจกรรมช่วงโควิด">
          <img
            css={css`
              cursor: pointer;
            `}
            src="/images/cover-slide.png"
            alt="cover-slide"
          />
        </Link>

        <Navigation>
          <div className="pages-group">
            <Pagination className="selected" />
            <Pagination />
            <Pagination />
            <Pagination />
          </div>
        </Navigation>
      </LeftSection>

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

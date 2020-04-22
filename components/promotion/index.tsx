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
        <MenuItem isSelected={true}>ข้อเสนอพิเศษ</MenuItem>
        <MenuItem>วันหยุดสุดพิเศษ</MenuItem>
        <span>ดูโปรโมชั่นทั้งหมด</span>
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
          <div className="button-group">
            <img className="left" src="/svg/left.svg" alt="left" />
            <img className="right" src="/svg/right.svg" alt="" />
          </div>

          <div className="pages-group">
            <Pagination className="selected" />
            <Pagination />
            <Pagination />
            <Pagination />
          </div>
        </Navigation>
      </LeftSection>

      <RightSection>
        <SectionTitle title="กิจกรรมสุดพิเศษในช่วง Covid-19" />

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

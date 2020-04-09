import { SectionTitle } from "./section-title"
import { MenuItem } from "./menu-item"

import {
  Container,
  Upper,
  Menu,
  MainContent,
  LeftSection,
  Navigation,
  Pagination,
  RightSection,
  Button,
} from "./styles/promotion"

export const Promotion: React.FC = () => (
  <Container>
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
        <img src="/images/cover-slide.png" alt="cover-slide" />
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
        <SectionTitle title="Lorem Ipsum" />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.{" "}
        </p>
        <Button>อ่านต่อ</Button>
      </RightSection>
    </MainContent>
  </Container>
)

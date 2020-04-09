import styled from "styled-components"

const Container = styled.div`
  font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  background: #ffc626;
  margin-top: 60px;
  padding: 60px 60px;
`

const RedLine = styled.div`
  width: 70%;
  height: 5px;
  background-color: #f23318;
  border-radius: 40px;
`

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Menu = styled.div`
  flex: 0 1 40%;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    min-height: 36px;
  }

  .selected {
    color: #ff2000;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  span {
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 1 50%;
    justify-content: space-evenly;
  }
`

const MainContent = styled.div`
  display: flex;
`

const LeftSection = styled.div`
  flex: 0 1 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;

  > img {
    margin-top: 30px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 1 50%;
  }
`

const RightSection = styled.div`
  flex: 0 1 50%;
  min-height: 450px;
  background-color: #fff;
  border-radius: 10px;
  color: #ffc626;
  box-sizing: border-box;

  p {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    flex: 0 1 40%;
    padding: 30px 50px 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 80px 80px;
  }
`

const Title = styled.div`
  width: fit-content;

  h1 {
    margin: 0;
  }
`

const Button = styled.div`
  width: 230px;
  border-radius: 20px;
  background-color: #ff2000;
  font-size: 24px;
  color: #fff;
  font-weight: 300;
  text-align: center;
  padding: 5px 0;
`

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .button-group {
    .left {
      cursor: pointer;
      margin-right: 15px;
    }

    .right {
      cursor: pointer;
      margin-left: 15px;
    }
  }

  .pages-group {
    display: flex;
    margin-right: 20px;
    margin-top: 5px;
  }
`

const Pagination = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border: 1px solid #ff2000;
  border-radius: 50%;
  margin: 0 5px;

  &.selected {
    background-color: #ff2000;
  }
`

interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <Title>
    <h1>{title}</h1>
    <RedLine />
  </Title>
)

interface MenuItemProps {
  isSelected?: boolean
}

const MenuItem: React.FC<MenuItemProps> = props => (
  <div className={props.isSelected ? "selected" : undefined}>
    {props.children}
    {props.isSelected && <RedLine />}
  </div>
)

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

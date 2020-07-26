import { TitleWithYellowLine } from "../section-title"
import { Container, MainContent, LeftSection } from "./styles/promotion"
import { PagePadding } from "../../styles/container"
import Slider from "react-slick"
import { useEffect, useState, useRef } from "react"

const settings = {
  fade: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
}

const slideImages = [
  "images/slider_desktop/test-dis.png",
  "images/slider_desktop/covid.png",
  "images/slider_desktop/customer-sc.png",
]

export const Promotion: React.FC = () => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    setNav1(slider1.current as any)
    setNav2(slider2.current as any)
  }, [])

  return (
    <Container css={PagePadding({ topAndBottom: 60 })}>
      <MainContent>
        <LeftSection>
          <div
            style={{
              width: "500px",
              height: "400px",
              margin: "0 auto",
            }}
          >
            <Slider {...settings} asNavFor={nav2} ref={slider1}>
              <div
                style={{
                  width: "500px",
                  height: "400px",
                }}
              >
                <TitleWithYellowLine title="โปรโมชั่นสุดพิเศษ" />
                <p>
                  แทนคำขอบคุณที่ให้การสนับสนุนเราเป็นอย่างดี
                  เราขอมอบของขวัญสุดพิเศษให้กับทุกท่าน จองกิจกรรมครั้งแรก
                  ลดทันที 10% ทุกกิจกรรม จองเลยวันนี้ - 30 สิงหาคม 2563 นี้!
                  <br />
                  <br />* 1 ท่าน/1สิทธิ์ เท่านั้น
                </p>
              </div>
              <div
                style={{
                  width: "500px",
                  height: "400px",
                }}
              >
                <TitleWithYellowLine title="กิจกรรมในช่วง Covid-19" />
                <p>
                  ปลอดภัยหายห่วงกับกิจกรรมที่เราคัดสรรเพื่อลูกของคุณ
                  รวมกิจกรรมที่มีมาตราการรองรับระหว่างทำกิจกรรม
                  เพื่อการป้องกันการติดเชื้อไวรัส COVID-19
                </p>
              </div>
              <div
                style={{
                  width: "500px",
                  height: "400px",
                }}
              >
                <TitleWithYellowLine title="เลือกกิจกรรมไม่ได้ให้เราช่วยคุณ" />
                <p>
                  สอบถามรายละเอียดของกิจกรรมเพิ่มเติม
                  ไม่เข้าใจวิธีใช้งานเว็บไซต์ พบปัญหาในการใช้งาน
                  ติดต่อฝ่ายCustomer Service ได้ตลอด 24ชม.
                </p>
              </div>
            </Slider>
          </div>
        </LeftSection>

        <div
          style={{
            width: "500px",
            height: "400px",
            margin: "0 auto",
          }}
        >
          <Slider {...settings} asNavFor={nav1} ref={slider2} slidesToShow={1}>
            <div>
              <img
                src={slideImages[0]}
                style={{
                  width: "500px",
                  height: "400px",
                }}
              />
            </div>
            <div>
              <img
                src={slideImages[1]}
                style={{
                  width: "500px",
                  height: "400px",
                }}
              />
            </div>
            <div>
              <img
                src={slideImages[2]}
                style={{
                  width: "500px",
                  height: "400px",
                }}
              />
            </div>
          </Slider>
        </div>
      </MainContent>
    </Container>
  )
}

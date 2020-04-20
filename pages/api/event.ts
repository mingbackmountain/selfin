import { NextApiRequest, NextApiResponse } from "next"

import WAcademyMarkdown from "../../events-info/01.md"
import KnowAreMarkdown from "../../events-info/02.md"
import EkachaiHospitalMarkdown from "../../events-info/03.md"
import LandlabMarkdown from "../../events-info/05.md"
import TaitonmaiMarkdown from "../../events-info/06.md"
import FarmSanookMarkdown from "../../events-info/07.md"
import DalPlayhouseMarkdown from "../../events-info/15.md"

const ACTIVITY = "activity"
const LEARNING = "learning"
const MENTAL = "mental"

const BKK = "bangkok"
const NAKHONRAT = "nakhonratchasima"
const SINGHABURI = "singhaburi"
const NONTHABURI = "nontraburi"
const SAMUTSAKORN = "samutsakorn"
const PATHUMTANI = "pathumtani"

const APL = "april"

const mockData = [
  {
    id: "01",
    img: "/images/s-1450016.png",
    name: "W Academy",
    place: "Too Fast To Sleep : Sasin (ในจุฬาลงกรณ์มหาวิทยาลัย)",
    excerpt: `W Academy โรงเรียนการเงินสำหรับเด็กโดยทีมเอกการเงิน BBA ธรรมศาสตร์ เน้นการเรียนการสอนที่เข้าใจในธรรมชาติของเด็ก ผ่านการเรียนรู้ในรูปแบบ "play-based learning" เพื่อให้เด็กได้ลงมือทำมากกว่าการท่องจำในห้องเรียน`,
    description: WAcademyMarkdown,
    time: "9.00 - 16.00 (ขึ้นอยู่กับกิจกรรม)",
    price: 690,
    tel: "092 478 7936 หรือ 063 421 4765",
    info: {
      addressCode: BKK,
      type: [ACTIVITY, LEARNING],
      month: APL,
    },
  },
  {
    id: "02",
    img: "/images/36044.png",
    name: "Know-are",
    place:
      "KnowAre Learning ซอยงามวงศ์วาน 14 ต. บางเขน อ. เมืองนนทบุรี จ.นนทบุรี 11000",
    excerpt: `KnowAre เกิดขึ้นภายใต้ ‘กิจการเพื่อสังคม’ ที่ต้องการทำให้เด็ก ๆ ได้รู้ (Know) ตัวเอง ว่าต้องการจะเป็น (Are) อะไร`,
    description: KnowAreMarkdown,
    time: "ขึ้นอยู่กับกิจกรรม",
    price: 4900,
    tel: "097-090-8402",
    info: {
      addressCode: NONTHABURI,
      type: [LEARNING],
      month: APL,
    },
  },
  {
    id: "03",
    img: "/images/s-1450014.png",
    name: "Ekachai Hospital",
    place: "99/9 หมู่ 4 ถนนเอกชัย ตำบลโคกขาม อำเภอเมือง จังหวัดสมุทรสาคร 74000",
    excerpt: `โรงพยาบาลเอกชัยจัดตั้งขึ้นโดยกลุ่มแพทย์ที่มีความเชี่ยวชาญและประสบการณ์ เป็นที่เชื่อมั่นของคนในจังหวัดสมุทรสาครและจังหวัดใกล้เคียง ตั้งแต่ปีพ.ศ. 2546`,
    description: EkachaiHospitalMarkdown,
    time: "24 ชั่วโมง",
    price: 4900,
    tel: "(+66)34 417-999 Hotline 1715",
    info: {
      addressCode: SAMUTSAKORN,
      type: [MENTAL],
      month: APL,
    },
  },
  {
    id: "05",
    img: "/images/s-1450016.png",
    name: "Landlab",
    place: "เขตทวีวัฒนา, อำเภอไทรน้อย, เทศบาลนครนนทบุรี 11150",
    description: LandlabMarkdown,
    excerpt: `“นำชีวิตมาทดลองที่ห้อง Lab ธรรมชาติ”`,
    time:
      "จัดกิจกรรมเกือบทุกเสาร์-อาทิตย์ (แต่ตอนนี้ยังไม่มีกำหนดเปิดเนื่องจากสถานการณ์โควิด-19)",
    price: 690,
    tel: "082 461 5987",
    info: {
      addressCode: NONTHABURI,
      type: [LEARNING, ACTIVITY],
      month: APL,
    },
  },
  {
    id: "06",
    img: "/images/s-1450016.png",
    name: "Taitonmai",
    place: "วิชชาลัยในสวนบางมด",
    excerpt: `ที่อาณาจักร Taitonmai นั้นมีผู้ใหญ่สี่คนอาศัยอยู่ในภารกิจเพื่อสร้างจักรวาลมหัศจรรย์ที่เต็มไปด้วยโลกแฟนตาซีสำหรับเด็ก`,
    description: TaitonmaiMarkdown,
    time: "-",
    price: 690,
    tel: "086 979 2625",
    info: {
      addressCode: BKK,
      type: [LEARNING, ACTIVITY],
      month: APL,
    },
  },
  {
    id: "07",
    img: "/images/s-1450014.png",
    name: "Farm Sanook Kid Camp",
    place: "อำเภอ คลองหลวง ปทุมธานี",
    excerpt: `เล่นเพื่อเพิ่มพัฒนาการทางร่างกาย และ จิตใจ เล่นเพื่อปรับตัวให้เข้ากับสังคม เล่นเพื่อให้เกิดการเรียนรู้ เล่นเพื่อพัฒนาสมอง เล่นเพื่อให้ใช้ชีวิตในสังคมได้อย่างมีความสุข`,
    description: FarmSanookMarkdown,
    time: "ทุกวันเสาร์ อาทิตย์ และวันหยุดนักขัตฤกษ์ 13:00-15:00 น.",
    price: 4900,
    tel: "061 464 1598",
    info: {
      addressCode: PATHUMTANI,
      type: [ACTIVITY],
      month: APL,
    },
  },
  {
    id: "15",
    img: "/images/36044.png",
    name: "บ้านเล่นและเสริมทักษะ by ครูเดล",
    place: "บ้านเล่นเสริมทักษะ ครูเดล ทวีวัฒนา กทม.",
    excerpt: `จัดกระบวนการสำหรับบุคคลที่มีความต้องการพิเศษ วางแผน จัดกิจกรรมส่งเสริมพัฒนาการและปรับพฤติกรรม สอนเสริมวิชาการควบคู่กับการฝึกทักษะชีวิต`,
    description: DalPlayhouseMarkdown,
    time: "-",
    price: 4900,
    tel: "094-9154945",
    info: {
      addressCode: BKK,
      type: [LEARNING, ACTIVITY],
      month: APL,
    },
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    data: mockData,
  })
}

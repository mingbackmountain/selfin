import { NextApiRequest, NextApiResponse } from "next"

import WAcademyMarkdown from "../../events-info/01.md"
import KnowAreMarkdown from "../../events-info/02.md"
import EkachaiHospitalMarkdown from "../../events-info/03.md"
import LandlabMarkdown from "../../events-info/05.md"
import TaitonmaiMarkdown from "../../events-info/06.md"
import FarmSanookMarkdown from "../../events-info/07.md"
import KidJourney from "../../events-info/08.md"
import DreamFarm from "../../events-info/09.md"
import PlayAcademy from "../../events-info/10.md"
import LenNokBaan from "../../events-info/11.md"
import KIDative from "../../events-info/12.md"
import MeaningKids from "../../events-info/13.md"
import ATF from "../../events-info/14.md"
import DalPlayhouseMarkdown from "../../events-info/15.md"

import { Event } from "../../components/event/types"

const ACTIVITY = "activity"
const LEARNING = "learning"
const MENTAL = "mental"

const TEST = "test"

const BKK = "bangkok"
const NONTHABURI = "nontraburi"
const SAMUTSAKORN = "samutsakorn"
const PATHUMTANI = "pathumtani"

const mockData: Event[] = [
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
    },
  },
  {
    id: "04",
    img: "/images/s-1450016.png",
    name: "Mindful Spark",
    place: "-",
    excerpt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    time: `-`,
    price: 0,
    tel: "098 765 4321",
    info: {
      addressCode: TEST,
      type: [TEST],
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
    },
  },
  {
    id: "08",
    img: "/images/s-1450016.png",
    name: "Kids’ Journey",
    place: "-",
    excerpt: `Kids’ Journey (คิดส์ เจอร์นีย์) เป็นสนามเรียนรู้สำหรับเด็กอายุ 7 – 12 ปี และครอบครัว เราจะพาคุณพ่อคุณแม่ทุกท่านไปรู้จักกับกิจกรรมสร้างสรรค์สำหรับเด็กๆ ที่จะทำให้ทุกเวลานอกห้องเรียน เป็นช่วงเวลาแห่งการทดลอง ภายใต้แนวคิด “ยิ่งลองเร็ว ยิ่งรู้เร็ว” สนับสนุนให้น้องๆ ได้ลองทุกประสบการณ์`,
    description: KidJourney,
    time: `-`,
    price: 0,
    tel: "0628587114 (พี่ฝ้าย) ,0992134664 (พี่ท็อป)",
    info: {
      addressCode: TEST,
      type: [TEST],
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
    },
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    data: mockData,
  })
}

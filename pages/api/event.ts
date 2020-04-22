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
import ALittleSomething from "../../events-info/16.md"

import { Event } from "../../components/event/types"

export const ARTMUSIC = "ศิลปะและดนตรี"
export const SPORT = "กีฬา"
export const THERAPY = "กิจกรรมบำบัด"
export const WORKSHOP = "เวิร์คช็อพ และ คลาสเรียนสร้างสรรค์"
export const CAMPING = "ค่ายการเรียนรู้"
export const COVID = "กิจกรรมช่วงโควิด"
export const COMMUNITY = "คอมมูนิตี้"

export const BKK = "กรุงเทพฯ"
export const NONTHABURI = "นนทบุรี"
export const SAMUTSAKORN = "สมุทรสาคร"
export const PATHUMTANI = "ปทุมธานี"
export const NAKHONPATHOM = "นครปฐม"
export const NAKHONRAT = "นครราชสีมา"

const mockData: Event[] = [
  // Mostly focus
  {
    id: "01",
    img:
      "/events/01-w-academy/71828247_527117681356052_680448095292489728_o.jpg",
    logo: "/events/01-w-academy/image.png",
    name: "W Academy",
    place: "Too Fast To Sleep : Sasin (ในจุฬาลงกรณ์มหาวิทยาลัย)",
    excerpt: `W Academy โรงเรียนการเงินสำหรับเด็กโดยทีมเอกการเงิน BBA ธรรมศาสตร์ เน้นการเรียนการสอนที่เข้าใจในธรรมชาติของเด็ก ผ่านการเรียนรู้ในรูปแบบ "play-based learning" เพื่อให้เด็กได้ลงมือทำมากกว่าการท่องจำในห้องเรียน`,
    description: WAcademyMarkdown,
    time: "9.00 - 16.00 (ขึ้นอยู่กับกิจกรรม)",
    tel: "092 478 7936 หรือ 063 421 4765",
    info: {
      addressCode: BKK,
      type: [WORKSHOP],
    },
  },
  {
    id: "02",
    img: "/events/02-know-are/image (4).png",
    logo: "/events/02-know-are/image (8).png",
    name: "Know-are",
    place:
      "KnowAre Learning ซอยงามวงศ์วาน 14 ต. บางเขน อ. เมืองนนทบุรี จ.นนทบุรี 11000",
    excerpt: `KnowAre เกิดขึ้นภายใต้ ‘กิจการเพื่อสังคม’ ที่ต้องการทำให้เด็ก ๆ ได้รู้ (Know) ตัวเอง ว่าต้องการจะเป็น (Are) อะไร`,
    description: KnowAreMarkdown,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "097-090-8402",
    info: {
      addressCode: NONTHABURI,
      type: [WORKSHOP, CAMPING],
    },
  },
  {
    id: "06",
    img:
      "/events/06-taitonmai/46511036_2211964662409803_8209990433397276672_o.jpg",
    logo:
      "/events/06-taitonmai/84507787_2543251472614452_3720907280091185152_o.png",
    name: "Taitonmai",
    place: "วิชชาลัยในสวนบางมด",
    excerpt: `ที่อาณาจักร Taitonmai นั้นมีผู้ใหญ่สี่คนอาศัยอยู่ในภารกิจเพื่อสร้างจักรวาลมหัศจรรย์ที่เต็มไปด้วยโลกแฟนตาซีสำหรับเด็ก`,
    description: TaitonmaiMarkdown,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "086 979 2625",
    info: {
      addressCode: BKK,
      type: [SPORT, WORKSHOP, CAMPING],
    },
  },
  {
    id: "07",
    img:
      "/events/07-farm-sanook/83923396_2631429500469034_118510018986246144_o.jpg",
    logo: "/events/07-farm-sanook/image.png",
    name: "Farm Sanook Kid Camp",
    place: "อำเภอ คลองหลวง ปทุมธานี",
    excerpt: `เล่นเพื่อเพิ่มพัฒนาการทางร่างกาย และ จิตใจ เล่นเพื่อปรับตัวให้เข้ากับสังคม เล่นเพื่อให้เกิดการเรียนรู้ เล่นเพื่อพัฒนาสมอง เล่นเพื่อให้ใช้ชีวิตในสังคมได้อย่างมีความสุข`,
    description: FarmSanookMarkdown,
    time: "ทุกวันเสาร์ อาทิตย์ และวันหยุดนักขัตฤกษ์ 13:00-15:00 น.",
    tel: "061 464 1598",
    info: {
      addressCode: PATHUMTANI,
      type: [SPORT, CAMPING],
    },
  },
  {
    id: "16",
    img: "/events/16-a-little-something/image.png",
    logo: "/events/16-a-little-something/image (8).png",
    name: "A little something",
    place: "Sukhumvit 49 (The Racquet Club) 2nd floor, building 4",
    excerpt: `เด็กๆจะได้รับความรู้หลากหลายด้านภายใต้แนวความคิด learning by cooking ไม่ว่าจะเป็นความรู้ด้านวิทยาศาสตร์ คณิตศาสตร์​ ศิลปะ ความคิดสร้างสรรค์ และทักษะการสร้างปฏิสัมพันธ์อื่น รวมไปถึงการรู้คุณค่าและความสัมคัญของอาหาร`,
    description: ALittleSomething,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "089 142 1108",
    info: {
      addressCode: BKK,
      type: [WORKSHOP, COVID],
    },
  },
  // Not focus with
  {
    id: "03",
    img: "/events/03-ekachai-hospital/image.png",
    logo: "/events/03-ekachai-hospital/4ceb7a9f6a3142caba2b413f1f1d1356.jpg",
    name: "Ekachai Hospital",
    place: "99/9 หมู่ 4 ถนนเอกชัย ตำบลโคกขาม อำเภอเมือง จังหวัดสมุทรสาคร 74000",
    excerpt: `โรงพยาบาลเอกชัยจัดตั้งขึ้นโดยกลุ่มแพทย์ที่มีความเชี่ยวชาญและประสบการณ์ เป็นที่เชื่อมั่นของคนในจังหวัดสมุทรสาครและจังหวัดใกล้เคียง ตั้งแต่ปีพ.ศ. 2546`,
    description: EkachaiHospitalMarkdown,
    time: "24 ชั่วโมง",
    tel: "(+66)34 417-999 Hotline 1715",
    info: {
      addressCode: SAMUTSAKORN,
      type: [THERAPY],
    },
  },
  {
    id: "04",
    img:
      "/events/04-mindful-spark/69824363_1334011030108174_5400785009508352000_o.jpg",
    logo: "",
    name: "Mindful Spark",
    place: "ขึ้นอยู่กับกิจกรรม",
    excerpt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    time: `ขึ้นอยู่กับกิจกรรม`,
    tel: "098 765 4321",
    info: {
      addressCode: BKK,
      type: [WORKSHOP],
    },
  },
  {
    id: "05",
    img:
      "/events/05-landlab/92836182_1267784356752925_4992967290543669248_o.jpg",
    logo:
      "/events/05-landlab/31764751_774717972726235_7189445266871681024_o.jpg",
    name: "Landlab",
    place: "เขตทวีวัฒนา, อำเภอไทรน้อย, เทศบาลนครนนทบุรี 11150",
    description: LandlabMarkdown,
    excerpt: `“นำชีวิตมาทดลองที่ห้อง Lab ธรรมชาติ”`,
    time:
      "จัดกิจกรรมเกือบทุกเสาร์-อาทิตย์ (แต่ตอนนี้ยังไม่มีกำหนดเปิดเนื่องจากสถานการณ์โควิด-19)",
    tel: "082 461 5987",
    info: {
      addressCode: NONTHABURI,
      type: [WORKSHOP],
    },
  },
  {
    id: "08",
    img: "/events/08-kids-journey/Screen Shot 2563-01-26 at 10.58.04.png",
    logo: "",
    name: "Kids’ Journey",
    place: "กรุงเทพ",
    excerpt: `Kids’ Journey (คิดส์ เจอร์นีย์) เป็นสนามเรียนรู้สำหรับเด็กอายุ 7 – 12 ปี และครอบครัว เราจะพาคุณพ่อคุณแม่ทุกท่านไปรู้จักกับกิจกรรมสร้างสรรค์สำหรับเด็กๆ ที่จะทำให้ทุกเวลานอกห้องเรียน เป็นช่วงเวลาแห่งการทดลอง ภายใต้แนวคิด “ยิ่งลองเร็ว ยิ่งรู้เร็ว” สนับสนุนให้น้องๆ ได้ลองทุกประสบการณ์`,
    description: KidJourney,
    time: `ขึ้นอยู่กับกิจกรรม`,
    tel: "0628587114 (พี่ฝ้าย) ,0992134664 (พี่ท็อป)",
    info: {
      addressCode: BKK,
      type: [WORKSHOP, CAMPING],
    },
  },
  {
    id: "09",
    img: "/events/09-dream-farm/image (1).png",
    logo: "",
    name: "ฟาร์มนี้มีฝัน",
    place: "สบ.4040 Sap Sanun, Muak Lek District, Saraburi 18220",
    excerpt: `กิจกรรม Nature Kids Camp ค่ายยุวชน "วิชาชีวิต" 
    3 วัน 2 คืน กับกิจกรรม ท่ามกลางธรรมชาติ
    ต้อนรับลมหนาว ให้เด็กๆได้เรียนรู้ "วิชาชีวิต"
    ทั้งการเพาะปลูก การอยู่รอด และอยู่ร่วมกัน
    อย่างมีความสุข
    `,
    description: DreamFarm,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "081 826 1908",
    info: {
      addressCode: NAKHONRAT,
      type: [WORKSHOP, CAMPING],
    },
  },
  {
    id: "10",
    img: "/images/s-1450016.png",
    logo: "",
    name: "Play Academy",
    place:
      "เลขที่ 39 ห้อง B3 โครงการ เดอะ เซอร์เคิล ราชพฤกษ์ Ratchaphruek Rd, Bang Ramat, Taling Chan, Bangkok 10170",
    excerpt: `Play Academy เป็นสถาบันการศึกษาที่มุ่งเน้นให้เด็กได้เล่นและลงมือทำจริง`,
    description: PlayAcademy,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "083 596 5596",
    info: {
      addressCode: BKK,
      type: [WORKSHOP],
    },
  },
  {
    id: "11",
    img: "/events/11-len-nok-baan/image (4).png",
    logo: "/events/11-len-nok-baan/image.png",
    name: "เล่นนอกบ้าน Len Nok Baan",
    place: "กรุงเทพ (ขึ้นอยู่กับกิจกรรม)",
    excerpt: ` เกิดจากกลุ่มเพื่อนๆที่สนใจศึกษาแนวทางเลือกเกี่ยวกับการเสริมสร้างประสบการณ์ สร้างการเรียนรู้ใหม่ๆ ภายใต้การเล่น “นอกห้องเรียน`,
    description: LenNokBaan,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "094 265 6692",
    info: {
      addressCode: BKK,
      type: [ARTMUSIC, SPORT, WORKSHOP, CAMPING],
    },
  },
  {
    id: "12",
    img: "/images/s-1450016.png",
    logo: "",
    name: "KIDative: Innovation and Design Lab for Kids",
    place: "1 ซอย ริมคลองพระโขนง Phra Khanong Nuea, Watthana, Bangkok",
    excerpt: `ห้องทดลองทางความคิดสำหรับเด็กที่ช่วยกระตุ้นความคิดสร้างสรรค์ เรียบเรียงกระบวนการคิด และค้นหา Passion ของตัวเองให้พบ ผ่านการใช้ Design Thinking`,
    description: KIDative,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "063 879 1449",
    info: {
      addressCode: BKK,
      type: [WORKSHOP, COVID],
    },
  },
  {
    id: "13",
    img: "/images/s-1450016.png",
    logo: "",
    name: "คลินิกกระตุ้นพัฒนาการเด็ก Meaning-Kids",
    place: "74/12 Tha Talat, Sam Phran District, Nakhon Pathom 73110",
    excerpt: `คลินิกกระตุ้นพัฒนาการเด็ก ออทิสติก สมาธิสั้น พัฒนาการช้า เรียนไม่ทันเพื่อน ปรับพฤติกรรม`,
    description: MeaningKids,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "090 926 9775",
    info: {
      addressCode: NAKHONPATHOM,
      type: [THERAPY, COVID],
    },
  },
  {
    id: "14",
    img: "/images/s-1450016.png",
    logo: "",
    name: "Autistic Thai Foundation มูลนิธิออทิสติกไทย",
    place:
      "11 หมู่ 12 Bang Phrom 29 Alley, Bang Phrom, Taling Chan, Bangkok 10170",
    excerpt: `คลินิกกระตุ้นพัฒนาการเด็ก ออทิสติก สมาธิสั้น พัฒนาการช้า เรียนไม่ทันเพื่อน ปรับพฤติกรรม`,
    description: ATF,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "099 454 5395",
    info: {
      addressCode: BKK,
      type: [COMMUNITY],
    },
  },
  {
    id: "15",
    img: "/events/15-del/87299412_2525804744350353_5989290014045896704_o.jpg",
    logo: "/events/15-del/77122131_2429701210627374_7653225761163182080_n.jpg",
    name: "บ้านเล่นและเสริมทักษะ by ครูเดล",
    place: "บ้านเล่นเสริมทักษะ ครูเดล ทวีวัฒนา กทม.",
    excerpt: `จัดกระบวนการสำหรับบุคคลที่มีความต้องการพิเศษ วางแผน จัดกิจกรรมส่งเสริมพัฒนาการและปรับพฤติกรรม สอนเสริมวิชาการควบคู่กับการฝึกทักษะชีวิต`,
    description: DalPlayhouseMarkdown,
    time: "ขึ้นอยู่กับกิจกรรม",
    tel: "094-9154945",
    info: {
      addressCode: BKK,
      type: [ARTMUSIC, THERAPY, WORKSHOP, COMMUNITY],
    },
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    data: mockData,
  })
}

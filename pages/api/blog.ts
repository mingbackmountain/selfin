import { NextApiRequest, NextApiResponse } from "next"

const mockData = [
  {
    img: "/images/69944108-681604079023524-2939677824442695680-o.png",
    title: "5 การ์ตูนสำหรับลูก",
    excerpt:
      "1.Wall Street<br />ที่นี่มีระดับภาษาอังกฤษถึง 20 ระดับและเป็นการเรียนแบบกลุ่มทั้งหมด โดยจะเน้นทักษะ ฟัง พูด อ่าน เขียน รวมไปถึงใบรับรอง...",
    date: "22 กันยายน 2562",
  },
  {
    img: "/images/70388238-684886578695274-2535290551691902976-o.png",
    title: "iPad มีประโยชน์อย่างไรต่อการเรียน ?",
    excerpt:
      "1.ปาร์ตี้คำศัพท์<br />ผลงานซีรี่ย์ของ จิม เฮนสัน ที่มีฉายเฉพาะบนNetflix เท่านั้นเด็กๆก่อนวัยเรียนจะได้เรียนรู้คำศัพท์ภาษาอังกฤษใหม่ๆผ่าน...",
    date: "22 กันยายน 2562",
  },
  {
    img: "/images/71942639-694888141028451-6361824018328190976-o.png",
    title: "รวมกิจกรรมประจำเดือนกันยายน",
    excerpt:
      "หลังจากที่Apple ได้เปิดตัวสินค้าหลายอย่างไปเมื่อไม่นานมานี้หนึ่งในนั้นก็มี iPad Genใหม่ จอใหญ่กว่าเดิม (10.2นิ้ว)วันนี้เซ้ลฟินจะมาพูดถึงประโยชน์ของ iPadในด้านการศึกษากัน...",
    date: "22 กันยายน 2562",
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    data: mockData,
  })
}

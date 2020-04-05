import React, { useContext } from "react"

import { BlogCard } from "./BlogCard"

import { YellowHeadline } from "../styles/yellow-headline"
import { Container } from "../styles/container"
import { BlogSection } from "../styles/blog"

import { asset } from "../contexts/asset"

export const Blog: React.FC = () => {
  const { blog1, blog2, blog3 } = useContext(asset)

  const mockData = [
    {
      img: blog1,
      title:
        "จะปิดเทอมแล้ว! เรียนภาษาอังกฤษที่ไหนดี? SELFIN มีคำตอบ! พร้อมสรุปจุดเด่น คอร์สเรียน และราคา",
      excerpt:
        "1.Wall Street<br />ที่นี่มีระดับภาษาอังกฤษถึง 20 ระดับและเป็นการเรียนแบบกลุ่มทั้งหมด โดยจะเน้นทักษะ ฟัง พูด อ่าน เขียน รวมไปถึงใบรับรอง...",
      date: "22 กันยายน 2562",
    },
    {
      img: blog2,
      title:
        "วันนี้เซลฟินจะมาแนะนำการ์ตูนบนNetflix ที่ดูได้สนุกแถมยังได้ความรู้อีกด้วย",
      excerpt:
        "1.ปาร์ตี้คำศัพท์<br />ผลงานซีรี่ย์ของ จิม เฮนสัน ที่มีฉายเฉพาะบนNetflix เท่านั้นเด็กๆก่อนวัยเรียนจะได้เรียนรู้คำศัพท์ภาษาอังกฤษใหม่ๆผ่าน...",
      date: "22 กันยายน 2562",
    },
    {
      img: blog3,
      title:
        "เรามาทำความเข้าใจกันดีกว่าว่าiPad นั้นมีประโยชน์ต่อเรื่องเรียนของลูกอย่างไร ? มันไม่ได้มีไว้แค่เล่นเกมนะ",
      excerpt:
        "หลังจากที่Apple ได้เปิดตัวสินค้าหลายอย่างไปเมื่อไม่นานมานี้หนึ่งในนั้นก็มี iPad Genใหม่ จอใหญ่กว่าเดิม (10.2นิ้ว)วันนี้เซ้ลฟินจะมาพูดถึงประโยชน์ของ iPadในด้านการศึกษากัน...",
      date: "22 กันยายน 2562",
    },
  ]

  return (
    <Container>
      <BlogSection>
        <h1>
          บล็อก
          <YellowHeadline />
        </h1>
        <div className="cards">
          {mockData.map(blog => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
        <div className="all-blog-button">ดูบล็อกทั้งหมด ></div>
      </BlogSection>
    </Container>
  )
}

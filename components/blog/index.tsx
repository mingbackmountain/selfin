import { BlogCard } from "./card"

import { YellowHeadline } from "../../styles/yellow-headline"
import { Container } from "../../styles/container"
import { BlogSection } from "./styles/blog"

import { useMockBlogData } from "./utils/hooks-get-mock-data"

export const Blog: React.FC = () => {
  const data = useMockBlogData()

  return (
    <Container>
      <BlogSection>
        <h1>
          บล็อก
          <YellowHeadline />
        </h1>
        <div className="cards">
          {data && data.map(blog => <BlogCard key={blog.title} blog={blog} />)}
        </div>
        <div className="all-blog-button">ดูบล็อกทั้งหมด ></div>
      </BlogSection>
    </Container>
  )
}

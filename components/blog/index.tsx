import { BlogCard } from "./card"
import { Title } from "./title"

import { Container } from "../../styles/container"
import { BlogSection } from "./styles/blog"

import { useMockBlogData } from "./utils/hooks-get-mock-data"

import { CSSProps } from "../layout/types"

export const Blog: React.FC<CSSProps> = ({ style }) => {
  const data = useMockBlogData()

  return (
    <Container>
      <BlogSection css={style}>
        <Title text="กระดานความรู้" />

        <div className="all-blog-button">ดูทั้งหมด ></div>

        <div className="cards">
          {data && data.map(blog => <BlogCard key={blog.title} blog={blog} />)}
        </div>

        <div className="all-blog-button mobile">ดูทั้งหมด ></div>
      </BlogSection>
    </Container>
  )
}

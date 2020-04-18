import { css } from "@emotion/core"

import { BlogCard } from "./card"
import { TitleWithYellowLine } from "../section-title/index"

import { PagePadding } from "../../styles/container"
import { BlogSection } from "./styles/blog"

import { useMockBlogData } from "../../utils/hooks-get-mock-blog"

import { CSSProps } from "../layout/types"

export const Blog: React.FC<CSSProps> = ({ style }) => {
  const data = useMockBlogData()

  return (
    <BlogSection
      css={css`
        ${PagePadding()}
        ${style}
      `}
    >
      <div className="top-section">
        <TitleWithYellowLine
          title="กระดานความรู้"
          style={css`
            margin-bottom: 30px;
          `}
        />

        <div className="all-blog-button">ดูทั้งหมด ></div>
        <div className="all-blog-button mobile">ดูทั้งหมด >></div>
      </div>

      <div className="cards">
        {data && data.map(blog => <BlogCard key={blog.title} blog={blog} />)}
      </div>
    </BlogSection>
  )
}

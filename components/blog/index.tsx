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
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <TitleWithYellowLine
            style={css`
              display: flex;
              flex-flow: column;
              align-items: center;
            `}
            title="กระดานความรู้"
          />
        </div>

        <div className="all-blog-button">
          ดูทั้งหมด ><span className="mobile">></span>
        </div>
      </div>

      <div className="cards">
        {data && data.map(blog => <BlogCard key={blog.title} blog={blog} />)}
      </div>
    </BlogSection>
  )
}

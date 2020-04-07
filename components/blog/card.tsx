import { BlogCardContainer } from "./styles/blog"

import { BlogCardProps } from "./types"

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <BlogCardContainer key={blog.title}>
      <img src={blog.img} alt={blog.title} />
      <h1>{blog.title}</h1>
    </BlogCardContainer>
  )
}

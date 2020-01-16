import React from "react"

import { BlogCardContainer } from "../styles/blog"

interface BlogCardProps {
  blog: {
    img: string
    title: string
    excerpt: string
    date: string
  }
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <BlogCardContainer key={blog.title}>
      <img src={blog.img} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
      <div>
        <p>{blog.date}</p>
      </div>
    </BlogCardContainer>
  )
}

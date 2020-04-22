export interface Blog {
  img: string
  title: string
  excerpt: string
  date: string
}

export interface BlogCardProps {
  blog: Blog
}

export interface ResponseFromServer {
  data: Blog[]
}

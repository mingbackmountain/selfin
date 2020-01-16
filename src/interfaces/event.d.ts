export interface EventCardProps {
  event: {
    img: string
    name: string
    place: string
    time: string
    price: number
  }
}

export interface EventInfoProps {
  placeName?: string
  time?: string
}

export interface EventTypeProps {
  isRecommend: boolean
  text: string
}

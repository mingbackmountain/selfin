export interface Event {
  id: string
  img: string
  logo: string
  name: string
  place: string
  excerpt: string
  description: string
  time: string
  tel: string
  info: SearchInfo
}

export interface SearchInfo {
  addressCode: string
  type: string[]
}

export interface EventInfoProps {
  placeName?: string
  time?: string
}

export interface EventTypeProps {
  text: string
}

export interface EventCardProps {
  event: Event
}

interface ResponseFromServer {
  data: Event[]
}

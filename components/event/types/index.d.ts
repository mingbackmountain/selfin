export interface Event {
  img: string
  name: string
  place: string
  description: string
  time: string
  price: number
  info: SearchInfo
}

export interface SearchInfo {
  addressCode: string
  type: string[]
  month: string
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

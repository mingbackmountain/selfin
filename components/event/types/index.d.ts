interface TitleProps {
  text: string
}

export interface Event {
  img: string
  name: string
  place: string
  time: string
  price: number
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

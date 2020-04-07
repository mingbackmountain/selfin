export interface Event {
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
  text: string
}

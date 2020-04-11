import { Event } from "../../event/types"

export interface EventResult extends Event {
  description: string
}

export interface EventProps {
  event: EventResult
}

export interface Item {
  item: number
}

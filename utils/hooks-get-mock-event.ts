import { useState, useEffect } from "react"
import axios from "axios"

import { ResponseFromServer, Event } from "../components/event/types"

export function useMockEventData() {
  const [data, addDataToState] = useState<Event[]>()

  useEffect(() => {
    axios.get<ResponseFromServer>("/api/event").then(response => {
      const dataPayload = response.data

      addDataToState(dataPayload.data)
    })
  }, [])

  return data
}

interface AvailableSearchOption {
  eventType: string[]
  district: string[]
}

export interface SearchOption {
  eventType: string
  district: string
}

export function useSearchOption(): AvailableSearchOption {
  const data = useMockEventData()

  if (data) {
    // using Set to get the unique option
    const eventType = [...new Set(data.flatMap(item => item.info.type))]
    const district = [...new Set(data.map(item => item.info.addressCode))]

    return {
      eventType,
      district,
    }
  }

  return {
    eventType: [],
    district: [],
  }
}

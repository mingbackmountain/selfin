import { useState, useEffect } from "react"
import axios from "axios"

import { ResponseFromServer, Event } from "../types"

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

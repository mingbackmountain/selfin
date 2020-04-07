import { useState, useEffect } from "react"
import axios from "axios"

import { ResponseFromServer, Blog } from "../types"

export function useMockBlogData() {
  const [data, addDataToState] = useState<Blog[]>()

  useEffect(() => {
    axios.get<ResponseFromServer>("/api/blog").then(response => {
      const dataPayload = response.data

      addDataToState(dataPayload.data)
    })
  }, [])

  return data
}

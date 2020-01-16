import { useState } from "react"

export function useValue() {
  const [value, setValue] = useState("")

  return {
    value,
    setValue,
  }
}

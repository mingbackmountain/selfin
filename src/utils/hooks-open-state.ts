import { useState } from "react"

export function useOpenState() {
  const [isOpen, setOpenState] = useState(false)

  return {
    isOpen,
    setOpenState,
  }
}

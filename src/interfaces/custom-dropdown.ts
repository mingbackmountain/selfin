export interface DropdownProps {
  options: {
    width: number
    isOpen: boolean
    onClick: () => void
    value: string
    setValue: (key: string) => void
  }
  dropdownData: {
    placeHolder: string
    values: { [key: string]: string }[]
  }
}

export interface SelectState {
  isOpen: boolean
}

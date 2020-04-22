export interface DropdownProps {
  options: DropdownFunction
  dropdownData: DropdownData
}

export interface DropdownFunction {
  isOpen: boolean
  onClick: () => void
  value: string
  setValue: (value: string) => void
}

export interface DropdownData {
  placeHolder: string
  values: string[]
}

export interface SelectState {
  isOpen: boolean
}

import { Dispatch, SetStateAction } from "react"

import { Select, SelectTab, QuestionContainer } from "./styles/search-bar"

import { DropdownProps } from "./types"
import { CSSProps } from "../layout/types"

export const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  dropdownData,
}) => {
  return (
    <Select isOpen={options.isOpen} onClick={options.onClick}>
      {dropdownData.placeHolder}
      <br />
      <span>{options.value}</span>
      <ul>
        <li onClick={() => options.setValue("")}>--</li>
        {/* @todo: hard to understand, need to refactor */}
        {dropdownData.values.map(data => (
          <li key={data} onClick={() => options.setValue(data)}>
            {data}
          </li>
        ))}
      </ul>
    </Select>
  )
}

interface SelectBarProps {
  title: string
  questionDisplay: string
  options: (number | string)[]
  value: string
  onClick: Dispatch<SetStateAction<string>>
}

export const SelectBar: React.FC<SelectBarProps & CSSProps> = ({
  title,
  questionDisplay,
  options,
  style,
  value,
  onClick,
}) => (
  <QuestionContainer css={style}>
    <h2>{title}</h2>
    <SelectTab value={value} onChange={e => onClick(e.target.value)}>
      <option value="">{questionDisplay}</option>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </SelectTab>
  </QuestionContainer>
)

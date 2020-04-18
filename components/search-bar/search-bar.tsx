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
}

export const SelectBar: React.FC<SelectBarProps & CSSProps> = ({
  title,
  questionDisplay,
  options,
  style,
}) => (
  <QuestionContainer css={style}>
    <h2>{title}</h2>
    <SelectTab>
      <option>{questionDisplay}</option>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </SelectTab>
  </QuestionContainer>
)

import { Select, SelectTab, QuestionContainer } from "./styles/search-bar"

import { DropdownProps } from "./types"
import { CSSProps } from "../layout/types"

export const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  dropdownData,
}) => {
  return (
    <Select
      style={{ width: `${options.width}px` }}
      isOpen={options.isOpen}
      onClick={options.onClick}
    >
      {dropdownData.placeHolder}
      <br />
      <span>{options.value}</span>
      <ul>
        {/* @todo: hard to understand, need to refactor */}
        {dropdownData.values.map(data => {
          const keys = Object.keys(data)
          const objectKey = keys[0]

          return (
            <li key={objectKey} onClick={() => options.setValue(objectKey)}>
              {data[objectKey]}
            </li>
          )
        })}
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

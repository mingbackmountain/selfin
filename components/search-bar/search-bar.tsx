import { Select } from "./styles/search-bar"

import { DropdownProps } from "./types"

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

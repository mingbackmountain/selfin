import { useOpenState } from "./hooks-open-state"
import { useValue } from "./hooks-select-value"

import { DropdownProps } from "../types/custom-dropdown"

export function useDropdownData() {
  const opt1_openState = useOpenState()
  const opt1_value = useValue()

  const opt2_openState = useOpenState()
  const opt2_value = useValue()

  const opt3_openState = useOpenState()
  const opt3_value = useValue()

  const dropdownDataList: DropdownProps[] = [
    {
      options: {
        width: 500,
        isOpen: opt1_openState.isOpen,
        onClick: () => opt1_openState.setOpenState(!opt1_openState.isOpen),
        value: opt1_value.value,
        setValue: opt1_value.setValue,
      },
      dropdownData: {
        placeHolder: "ประเภทกิจกรรม",
        values: [{ test: "test" }],
      },
    },
    {
      options: {
        width: 300,
        isOpen: opt2_openState.isOpen,
        onClick: () => opt2_openState.setOpenState(!opt2_openState.isOpen),
        value: opt2_value.value,
        setValue: opt2_value.setValue,
      },
      dropdownData: {
        placeHolder: "จังหวัด",
        values: [{ bkk: "กรุงเทพมหานคร" }, { cnx: "เชียงใหม่" }],
      },
    },
    {
      options: {
        width: 300,
        isOpen: opt3_openState.isOpen,
        onClick: () => opt3_openState.setOpenState(!opt3_openState.isOpen),
        value: opt3_value.value,
        setValue: opt3_value.setValue,
      },
      dropdownData: {
        placeHolder: "เดือน",
        values: [{ jan: "มกราคม" }, { feb: "กุมภาพันธ์" }],
      },
    },
  ]

  return {
    data: {
      eventType: opt1_value,
      state: opt2_value,
      month: opt3_value,
    },
    eventTypeOption: dropdownDataList[0],
    stateOption: dropdownDataList[1],
    monthOption: dropdownDataList[2],
  }
}

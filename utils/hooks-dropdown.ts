import { useOpenState } from "./hooks-open-state"
import { useValue } from "./hooks-select-value"
import { useSearchOption } from "./hooks-get-mock-event"

import { DropdownProps } from "../components/search-bar/types"

export function useDropdownData() {
  const { eventType, district, month } = useSearchOption()

  const eventTypeOptionOpenState = useOpenState()
  const eventTypeValue = useValue()

  const districtOptionOpenState = useOpenState()
  const districtValue = useValue()

  const monthOpenState = useOpenState()
  const monthValue = useValue()

  const eventTypeOption: DropdownProps = {
    options: {
      isOpen: eventTypeOptionOpenState.isOpen,
      onClick: () =>
        eventTypeOptionOpenState.setOpenState(!eventTypeOptionOpenState.isOpen),
      value: eventTypeValue.value,
      setValue: (key: string) => eventTypeValue.setValue(key),
    },
    dropdownData: {
      placeHolder: "ประเภทกิจกรรม",
      values: eventType,
    },
  }

  const districtOption: DropdownProps = {
    options: {
      isOpen: districtOptionOpenState.isOpen,
      onClick: () =>
        districtOptionOpenState.setOpenState(!districtOptionOpenState.isOpen),
      value: districtValue.value,
      setValue: (key: string) => districtValue.setValue(key),
    },
    dropdownData: {
      placeHolder: "ประเภทกิจกรรม",
      values: district,
    },
  }

  const monthOption: DropdownProps = {
    options: {
      isOpen: monthOpenState.isOpen,
      onClick: () => monthOpenState.setOpenState(!monthOpenState.isOpen),
      value: monthValue.value,
      setValue: (key: string) => monthValue.setValue(key),
    },
    dropdownData: {
      placeHolder: "ประเภทกิจกรรม",
      values: month,
    },
  }

  return {
    data: {
      eventType: eventTypeValue.value,
      district: districtValue.value,
      month: monthValue.value,
    },
    eventTypeOption,
    districtOption,
    monthOption,
  }
}

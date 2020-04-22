import { useOpenState } from "./hooks-open-state"
import { useValue } from "./hooks-select-value"
import { useSearchOption } from "./hooks-get-mock-event"

import { DropdownProps } from "../components/search-bar/types"

export function useDropdownData() {
  const { eventType, district } = useSearchOption()

  const eventTypeOptionOpenState = useOpenState()
  const eventTypeValue = useValue()

  const districtOptionOpenState = useOpenState()
  const districtValue = useValue()

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
      placeHolder: "จังหวัด",
      values: district,
    },
  }

  return {
    data: {
      eventType: eventTypeValue.value,
      district: districtValue.value,
    },
    eventTypeOption,
    districtOption,
  }
}

export function useMobileDropdownData() {
  const eventTypeValue = useValue()
  const districtValue = useValue()

  return {
    data: {
      eventType: eventTypeValue.value,
      district: districtValue.value,
    },
    method: {
      eventType: eventTypeValue.setValue,
      district: districtValue.setValue,
    },
  }
}

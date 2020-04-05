import React from "react"
import { CustomDropdown } from "./CustomDropdown"

import { Container } from "../styles/container"
import {
  NearbyFormContainer,
  DropdownForm,
  Button,
} from "../styles/nearby-event"

import { useDropdownData } from "../utils/hooks-dropdown"

export const NearbyEventForm: React.FC = () => {
  const { eventTypeOption, stateOption, monthOption } = useDropdownData()

  return (
    <Container>
      <NearbyFormContainer>
        <h1>ค้นหากิจกรรมที่ใกล้คุณ</h1>

        <DropdownForm>
          {/* event */}
          <CustomDropdown
            options={eventTypeOption.options}
            dropdownData={eventTypeOption.dropdownData}
          />

          {/* state */}
          <CustomDropdown
            options={stateOption.options}
            dropdownData={stateOption.dropdownData}
          />

          {/* month */}
          <CustomDropdown
            options={monthOption.options}
            dropdownData={monthOption.dropdownData}
          />
          <Button>ค้นหา</Button>
        </DropdownForm>
      </NearbyFormContainer>
    </Container>
  )
}

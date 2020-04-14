import { css } from "@emotion/core"

import { CustomDropdown, SelectBar } from "./search-bar"
import { TitleWithYellowLine } from "../section-title"

import { PagePadding } from "../../styles/container"
import {
  NearbyFormContainer,
  DropdownForm,
  Button,
  SearchButton,
} from "./styles/nearby-event"

import { useDropdownData } from "../../utils/hooks-dropdown"

export const NearbyEventForm: React.FC = () => {
  const { eventTypeOption, stateOption, monthOption } = useDropdownData()

  return (
    <NearbyFormContainer
      css={css`
        ${PagePadding({ topAndBottom: 10 })} margin: 0 120px;
      `}
    >
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
  )
}

export const MobileNearbyEventForm = () => {
  const { eventTypeOption, stateOption, monthOption } = useDropdownData()

  return (
    <NearbyFormContainer css={PagePadding()}>
      <TitleWithYellowLine
        title="ค้นหากิจกรรมที่ใกล้คุณ"
        style={css`
          display: flex;
          flex-flow: column;
          align-items: center;
        `}
      />

      <SelectBar
        title="ประเภทกิจกรรม"
        questionDisplay="คลิกเพื่อเลือกประเภทกิจกรรม"
        options={[1, 2, 3]}
      />

      <SelectBar
        title="จังหวัด"
        questionDisplay="คลิกเพื่อเลือกจังหวัด"
        options={[1, 2, 3]}
      />

      <SelectBar
        title="เดือน"
        questionDisplay="คลิกเพื่อเลือกเดือน"
        options={[1, 2, 3]}
      />

      <SearchButton
        css={css`
          margin-top: 20px;
        `}
      >
        ค้นหากิจกรรม
      </SearchButton>
    </NearbyFormContainer>
  )
}

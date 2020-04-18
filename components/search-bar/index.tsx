import { css } from "@emotion/core"
import { useRouter } from "next/router"

import { CustomDropdown, SelectBar } from "./search-bar"
import { TitleWithYellowLine } from "../section-title"

import { PagePadding } from "../../styles/container"
import {
  MobileContainer,
  NearbyFormContainer,
  DropdownForm,
  Button,
  SearchButton,
} from "./styles/nearby-event"

import { useDropdownData } from "../../utils/hooks-dropdown"
import { useSearchOption } from "../../utils/hooks-get-mock-event"

import { CSSProps } from "../layout/types"

export const NearbyEventForm: React.FC<CSSProps> = ({ style }) => {
  const {
    data,
    eventTypeOption,
    districtOption,
    monthOption,
  } = useDropdownData()
  const router = useRouter()

  console.log(data)

  return (
    <NearbyFormContainer
      css={css`
        margin: 0 60px;
        ${style}
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
          options={districtOption.options}
          dropdownData={districtOption.dropdownData}
        />

        {/* month */}
        <CustomDropdown
          options={monthOption.options}
          dropdownData={monthOption.dropdownData}
        />
        <Button
          onClick={() =>
            router.push({
              pathname: "/search-result",
              query: data,
            })
          }
        >
          ค้นหา
        </Button>
      </DropdownForm>
    </NearbyFormContainer>
  )
}

export const MobileNearbyEventForm: React.FC<CSSProps> = ({ style }) => {
  const { eventType, district, month } = useSearchOption()

  return (
    <MobileContainer
      css={css`
        ${PagePadding()}
        ${style}
      `}
    >
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
        options={eventType}
      />

      <SelectBar
        title="จังหวัด"
        questionDisplay="คลิกเพื่อเลือกจังหวัด"
        options={district}
      />

      <SelectBar
        title="เดือน"
        questionDisplay="คลิกเพื่อเลือกเดือน"
        options={month}
      />

      <SearchButton
        css={css`
          margin-top: 20px;
        `}
      >
        ค้นหากิจกรรม
      </SearchButton>
    </MobileContainer>
  )
}

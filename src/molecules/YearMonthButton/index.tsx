import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { SelectButton } from '../../atoms'
interface YearMonthButtonProps extends HTMLAttributes<HTMLDivElement> {
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  overrides: ComponentOverrides
  yearSelectOpen: boolean
  monthSelectOpen: boolean
}

const YearMonthButtonTemplate = {
  textAlign: 'center'
}

export const YearMonthButton: React.FC<YearMonthButtonProps> = props => {
  const { setYearSelectOpen, setMonthSelectOpen, value, overrides, yearSelectOpen, monthSelectOpen } = props

  const StyledYearMonthButton = styled.div(getOverrideCSSProperties(YearMonthButtonTemplate, overrides.YearMonthButton))

  return (
    <StyledYearMonthButton>
      <SelectButton
        overrides={overrides}
        active={yearSelectOpen}
        onClick={() => {
          setYearSelectOpen(true)
          setMonthSelectOpen(false)
        }}
      >
        {dayjs(value).format('YYYY')}
      </SelectButton>
      <SelectButton
        overrides={overrides}
        active={monthSelectOpen}
        onClick={() => {
          setYearSelectOpen(false)
          setMonthSelectOpen(true)
        }}
      >
        {dayjs(value).format('M')}
      </SelectButton>
    </StyledYearMonthButton>
  )
}

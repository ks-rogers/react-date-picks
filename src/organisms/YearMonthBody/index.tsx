import React, { Dispatch, SetStateAction, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { YearOptions, MonthOptions } from '../../molecules'

interface YearMonthBodyProps extends HTMLAttributes<HTMLDivElement> {
  handleChange: (target: string) => void
  setYearMonthPickerOpen: Dispatch<SetStateAction<boolean>>
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  yearSelectOpen: boolean
  monthSelectOpen: boolean
  dateFormat: string
  overrides: ComponentOverrides
}

const YearMonthBodyTemplate = {
  maxHeight: '162px',
  overflowY: 'scroll',
  overflowX: 'hidden'
}

export const YearMonthBody: React.FC<YearMonthBodyProps> = props => {
  const {
    handleChange,
    setYearMonthPickerOpen,
    setYearSelectOpen,
    setMonthSelectOpen,
    overrides,
    value,
    dateFormat
  } = props

  const StyledYearMonthBody = styled.div(getOverrideCSSProperties(YearMonthBodyTemplate, overrides.YearMonthBody))

  return (
    <StyledYearMonthBody>
      {props.yearSelectOpen && (
        <YearOptions
          handleChange={handleChange}
          setYearSelectOpen={setYearSelectOpen}
          setMonthSelectOpen={setMonthSelectOpen}
          value={value}
          dateFormat={dateFormat}
          overrides={overrides}
        />
      )}

      {props.monthSelectOpen && (
        <MonthOptions
          handleChange={handleChange}
          setYearMonthPickerOpen={setYearMonthPickerOpen}
          setMonthSelectOpen={setMonthSelectOpen}
          value={value}
          dateFormat={dateFormat}
          overrides={overrides}
        />
      )}
    </StyledYearMonthBody>
  )
}

import React, { Dispatch, SetStateAction, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { YearOptions, MonthOptions } from '../../molecules'

interface YearMonthBodyProps extends HTMLAttributes<HTMLDivElement> {
  handleChange: (target: string) => void
  setPickerOpen: Dispatch<SetStateAction<boolean>>
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  yearSelectOpen: boolean
  monthSelectOpen: boolean
  overrides: ComponentOverrides
}

const YearMonthBodyTemplate = {
  maxHeight: '162px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  padding: '0 16px'
}

export const YearMonthBody: React.FC<YearMonthBodyProps> = props => {
  const { handleChange, setPickerOpen, setYearSelectOpen, setMonthSelectOpen, overrides, value } = props

  const StyledYearMonthBody = styled.div(getOverrideCSSProperties(YearMonthBodyTemplate, overrides.YearMonthBody))

  return (
    <StyledYearMonthBody>
      {props.yearSelectOpen && (
        <YearOptions
          handleChange={handleChange}
          setYearSelectOpen={setYearSelectOpen}
          setMonthSelectOpen={setMonthSelectOpen}
          value={value}
          overrides={overrides}
        />
      )}

      {props.monthSelectOpen && (
        <MonthOptions
          handleChange={handleChange}
          setPickerOpen={setPickerOpen}
          setMonthSelectOpen={setMonthSelectOpen}
          value={value}
          overrides={overrides}
        />
      )}
    </StyledYearMonthBody>
  )
}

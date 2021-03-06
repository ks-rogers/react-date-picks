import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { YearMonthButton } from '../../molecules'

interface YearMonthHeaderProps extends HTMLAttributes<HTMLDivElement> {
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  overrides: ComponentOverrides
  yearSelectOpen: boolean
  monthSelectOpen: boolean
}

const StyledYearMonthHeaderTemplate = {
  padding: '0 0 16px 0'
}

export const YearMonthHeader: React.FC<YearMonthHeaderProps> = props => {
  const { overrides, setYearSelectOpen, setMonthSelectOpen, value, yearSelectOpen, monthSelectOpen } = props

  const StyledYearMonthHeader = styled.div(
    getOverrideCSSProperties(StyledYearMonthHeaderTemplate, overrides.YearMonthHeader)
  )

  return (
    <StyledYearMonthHeader>
      <YearMonthButton
        setYearSelectOpen={setYearSelectOpen}
        setMonthSelectOpen={setMonthSelectOpen}
        value={value}
        overrides={overrides}
        yearSelectOpen={yearSelectOpen}
        monthSelectOpen={monthSelectOpen}
      />
    </StyledYearMonthHeader>
  )
}

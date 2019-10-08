import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { YearMonthButton } from '../../molecules'

interface YearMonthHeaderProps extends HTMLAttributes<HTMLDivElement> {
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  setPickerOpen: Dispatch<SetStateAction<boolean>>
  value: string
  overrides: ComponentOverrides
}

const StyledYearMonthHeaderTemplate = {
  padding: '16px'
}

export const YearMonthHeader: React.FC<YearMonthHeaderProps> = props => {
  const { overrides, setYearSelectOpen, setMonthSelectOpen, value } = props

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
      />
    </StyledYearMonthHeader>
  )
}

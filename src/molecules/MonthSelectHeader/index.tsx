import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'
import { NextButton, PrevButton, Label } from '../../atoms'

interface MonthSelectHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  overrides?: ComponentOverrides
}

const MonthSelectHeaderTemplate = {}

export const MonthSelectHeader: React.FC<MonthSelectHeaderProps> = props => {
  const { overrides } = props

  const StyledMonthSelectHeader = styled.div(
    getOverrideCSSProperties(MonthSelectHeaderTemplate, overrides.MonthSelectHeader)
  )

  return (
    <StyledMonthSelectHeader>
      <NextButton overrides={overrides} />
      <Label overrides={overrides}>8</Label>
      <PrevButton overrides={overrides} />
    </StyledMonthSelectHeader>
  )
}

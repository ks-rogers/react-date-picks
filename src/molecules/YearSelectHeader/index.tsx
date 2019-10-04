import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'
import { NextButton, PrevButton, Label } from '../../atoms'

interface YearSelectHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  overrides?: ComponentOverrides
}

const YearSelectHeaderTemplate = {}

export const YearSelectHeader: React.FC<YearSelectHeaderProps> = props => {
  const { overrides } = props

  const StyledYearSelectHeader = styled.div(
    getOverrideCSSProperties(YearSelectHeaderTemplate, overrides.YearSelectHeader)
  )

  return (
    <StyledYearSelectHeader>
      <NextButton overrides={overrides} />
      <Label overrides={overrides}>2018</Label>
      <PrevButton overrides={overrides} />
    </StyledYearSelectHeader>
  )
}

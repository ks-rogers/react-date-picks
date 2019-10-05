import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'
import { NextButton, PrevButton, Label } from '../../atoms'
import moment from 'moment'

interface YearSelectHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  overrides?: ComponentOverrides
  handleChange: (target: string) => void
  value: string
}

const YearSelectHeaderTemplate = {
  display: 'flex',
  padding: '6px 0'
}

export const YearSelectHeader: React.FC<YearSelectHeaderProps> = props => {
  const { overrides, value, handleChange } = props

  const StyledYearSelectHeader = styled.div(
    getOverrideCSSProperties(YearSelectHeaderTemplate, overrides.YearSelectHeader)
  )

  return (
    <StyledYearSelectHeader>
      <PrevButton overrides={overrides} value={value} handleChange={handleChange} />
      <Label overrides={overrides}>{moment(value).format('YYYY')}</Label>
      <NextButton overrides={overrides} value={value} handleChange={handleChange} />
    </StyledYearSelectHeader>
  )
}

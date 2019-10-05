import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'
import { NextButton, PrevButton, Label } from '../../atoms'
import moment from 'moment'

interface MonthSelectHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  overrides?: ComponentOverrides
  handleChange: (target: string) => void
  value: string
}

const MonthSelectHeaderTemplate = {
  display: 'flex',
  padding: '6px 0'
}

export const MonthSelectHeader: React.FC<MonthSelectHeaderProps> = props => {
  const { overrides, value, handleChange } = props

  const StyledMonthSelectHeader = styled.div(
    getOverrideCSSProperties(MonthSelectHeaderTemplate, overrides.MonthSelectHeader)
  )

  return (
    <StyledMonthSelectHeader>
      <PrevButton overrides={overrides} value={value} handleChange={handleChange} />
      <Label overrides={overrides}>{moment(value).format('M')}</Label>
      <NextButton overrides={overrides} value={value} handleChange={handleChange} />
    </StyledMonthSelectHeader>
  )
}

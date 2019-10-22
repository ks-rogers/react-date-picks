import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'
import { NextButton, PrevButton, Label } from '../../atoms'
import dayjs from 'dayjs'

interface YearMonthSelectHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  overrides?: ComponentOverrides
  dateFormat: string
  handleChange: (target: string) => void
  value: string
}

const YearMonthSelectHeaderTemplate = {
  display: 'flex',
  padding: '0 0 16px 0',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center'
}

export const YearMonthSelectHeader: React.FC<YearMonthSelectHeaderProps> = props => {
  const { overrides, value, handleChange, dateFormat } = props

  const StyledYearMonthSelectHeader = styled.div(
    getOverrideCSSProperties(YearMonthSelectHeaderTemplate, overrides.YearMonthSelectHeader)
  )

  return (
    <StyledYearMonthSelectHeader>
      <PrevButton
        dateFormat={dateFormat}
        target="month"
        overrides={overrides}
        value={value}
        handleChange={handleChange}
      />
      <Label overrides={overrides}>{dayjs(value).format('MMMM YYYY')}</Label>
      <NextButton
        dateFormat={dateFormat}
        target="month"
        overrides={overrides}
        value={value}
        handleChange={handleChange}
      />
    </StyledYearMonthSelectHeader>
  )
}

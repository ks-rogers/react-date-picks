import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { YearMonthSelectHeader } from '../../molecules'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface CalendarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  overrides: ComponentOverrides
  dateFormat: string
  value: string
  handleChange: (target: string) => void
}

const CalendarHeaderTemplate = {
  maxHeight: '162px',
  overflowY: 'scroll',
  overflowX: 'hidden'
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = props => {
  const { overrides, value, handleChange, dateFormat } = props

  const StyledCalendarHeader = styled.div(getOverrideCSSProperties(CalendarHeaderTemplate, overrides.CalendarHeader))

  return (
    <StyledCalendarHeader>
      <YearMonthSelectHeader dateFormat={dateFormat} value={value} handleChange={handleChange} overrides={overrides} />
    </StyledCalendarHeader>
  )
}

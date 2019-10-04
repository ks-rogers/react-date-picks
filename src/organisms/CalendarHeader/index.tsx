import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { YearSelectHeader, MonthSelectHeader } from '../../molecules'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface CalendarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  overrides: ComponentOverrides
}

const CalendarHeaderTemplate = {
  maxHeight: '162px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  padding: '0 16px'
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = props => {
  const { overrides } = props

  const StyledCalendarHeader = styled.div(getOverrideCSSProperties(CalendarHeaderTemplate, overrides.CalendarHeader))

  return (
    <StyledCalendarHeader>
      <YearSelectHeader overrides={overrides} />
      <MonthSelectHeader overrides={overrides} />
    </StyledCalendarHeader>
  )
}

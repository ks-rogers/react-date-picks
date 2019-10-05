import React, { TableHTMLAttributes } from 'react'
import styled from 'styled-components'
import { WeekdayHeader, Week } from '../../molecules'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface CalendarBodyProps extends TableHTMLAttributes<HTMLTableElement> {
  overrides: ComponentOverrides
  value: string
}

const CalendarBodyTemplate = {
  width: '100%',
  padding: '16px'
}

export const CalendarBody: React.FC<CalendarBodyProps> = props => {
  const { overrides } = props

  const StyledCalendarBody = styled.table(getOverrideCSSProperties(CalendarBodyTemplate, overrides.CalendarBody))

  return (
    <StyledCalendarBody>
      <WeekdayHeader overrides={overrides} />
      <Week overrides={overrides} />
    </StyledCalendarBody>
  )
}

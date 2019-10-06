import React, { TableHTMLAttributes, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { WeekdayHeader, Week } from '../../molecules'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface CalendarBodyProps extends TableHTMLAttributes<HTMLTableElement> {
  overrides: ComponentOverrides
  value: string
  dateFormat: string
  handleChange: (target: string) => void
  localeMap: { [key: string]: any }
  setDatePickerOpen: Dispatch<SetStateAction<boolean>>
}

const CalendarBodyTemplate = {
  width: '100%',
  padding: '16px',
  borderSpacing: 0,
  borderCollapse: 'collapse'
}

export const CalendarBody: React.FC<CalendarBodyProps> = props => {
  const { overrides, value, handleChange, dateFormat, localeMap, setDatePickerOpen } = props

  const StyledCalendarBody = styled.table(getOverrideCSSProperties(CalendarBodyTemplate, overrides.CalendarBody))

  return (
    <StyledCalendarBody>
      <WeekdayHeader overrides={overrides} localeMap={localeMap} />
      <Week
        handleChange={handleChange}
        dateFormat={dateFormat}
        value={value}
        overrides={overrides}
        setDatePickerOpen={setDatePickerOpen}
      />
    </StyledCalendarBody>
  )
}

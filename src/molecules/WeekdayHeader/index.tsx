import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Weekday } from '../../atoms'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface WeekdayHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  overrides: ComponentOverrides
  localeMap: { [key: string]: any }
}

const WeekdayHeaderTemplate = {}

export const WeekdayHeader: React.FC<WeekdayHeaderProps> = props => {
  const { overrides, localeMap } = props

  const StyledWeekdayHeader = styled.thead(getOverrideCSSProperties(WeekdayHeaderTemplate, overrides.WeekdayHeader))

  return (
    <StyledWeekdayHeader>
      <tr>
        {localeMap &&
          localeMap.weekdaysShort &&
          localeMap.weekdaysShort.map((day: string) => {
            return (
              <Weekday overrides={overrides} key={day}>
                {day}
              </Weekday>
            )
          })}
      </tr>
    </StyledWeekdayHeader>
  )
}

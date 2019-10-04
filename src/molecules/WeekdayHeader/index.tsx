import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Weekday } from '../../atoms'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import moment from 'moment'
interface WeekdayHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  overrides: ComponentOverrides
}

const WeekdayHeaderTemplate = {}

export const WeekdayHeader: React.FC<WeekdayHeaderProps> = props => {
  const { overrides } = props

  const StyledWeekdayHeader = styled.thead(getOverrideCSSProperties(WeekdayHeaderTemplate, overrides.WeekdayHeader))

  return (
    <StyledWeekdayHeader>
      <tr>
        {moment.weekdaysShort().map(day => {
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

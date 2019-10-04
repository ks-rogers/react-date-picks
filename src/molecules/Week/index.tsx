import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Day } from '../../atoms'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import moment from 'moment'
interface WeekProps extends HTMLAttributes<HTMLTableSectionElement> {
  overrides: ComponentOverrides
}

const WeekTemplate = {}

export const Week: React.FC<WeekProps> = props => {
  const { overrides } = props
  const getComponentsTotalSlots = () => {
    const blanks = []
    const days = []
    const firstDayOfMonth = moment(moment())
      .startOf('month')
      .format('d') // Day of week 0...1..5...6

    for (let i = 0; i < Number(firstDayOfMonth); i++) {
      blanks.push(
        <Day overrides={overrides} key={`day-blank-${i.toString()}`} className="calendar-day empty">
          {''}
        </Day>
      )
    }
    for (let d = 1; d <= moment().daysInMonth(); d++) {
      // let currentDay = d == this.currentDay() ? 'today' : ''
      days.push(
        <Day overrides={overrides} key={`day-${d}`}>
          {d}
        </Day>
      )
    }

    return [...blanks, ...days]
  }

  const getComponentsSlotsAsCalendarFormat = () => {
    let rows: any[] = []
    let cells: any[] = []
    const totalSlots = getComponentsTotalSlots()

    totalSlots.map((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row)
      } else {
        rows.push(cells)
        cells = []
        cells.push(row)
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells)
      }
    })

    return rows
  }
  const StyledWeek = styled.tbody(getOverrideCSSProperties(WeekTemplate, overrides.Week))
  console.log(getComponentsSlotsAsCalendarFormat())
  return (
    <StyledWeek>
      {getComponentsSlotsAsCalendarFormat().map((d, i) => {
        return <tr key={`${d}-${i.toString()}`}>{d}</tr>
      })}
    </StyledWeek>
  )
}

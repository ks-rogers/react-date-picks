import React, { HTMLAttributes, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Day, DayBlank } from '../../atoms'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import dayjs from 'dayjs'
interface WeekProps extends HTMLAttributes<HTMLTableSectionElement> {
  handleChange: (target: string) => void
  value: string
  dateFormat: string
  overrides: ComponentOverrides
  setDatePickerOpen: Dispatch<SetStateAction<boolean>>
}

const WeekTemplate = {}

export const Week: React.FC<WeekProps> = props => {
  const { overrides, value, handleChange, dateFormat, setDatePickerOpen } = props
  const getComponentsTotalSlots = () => {
    const blanks = []
    const days = []
    const firstDayOfMonth = dayjs(value)
      .startOf('month')
      .format('d') // Day of week 0...1..5...6

    for (let i = 0; i < +firstDayOfMonth; i++) {
      blanks.push(
        <DayBlank overrides={overrides} key={`day-blank-${i.toString()}`}>
          {''}
        </DayBlank>
      )
    }
    for (let d = 1; d <= dayjs().daysInMonth(); d++) {
      days.push(
        <Day overrides={overrides} key={`day-${d}`}>
          {d}
        </Day>
      )
    }

    return [...blanks, ...days]
  }

  const getComponentsSlotsAsCalendarFormat = () => {
    let rows: JSX.Element[][] = []
    let cells: JSX.Element[] = []
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

  return (
    <StyledWeek>
      {getComponentsSlotsAsCalendarFormat().map((d, i) => {
        return (
          <tr
            onClick={e => {
              const dayElement: HTMLInputElement = e.target as HTMLInputElement
              const date: number = +dayElement.innerHTML
              handleChange(
                dayjs(value)
                  .set('date', date)
                  .format(dateFormat)
              )
              setDatePickerOpen(false)
            }}
            key={`${d}-${i.toString()}`}
            style={{ lineHeight: '14px' }}
          >
            {d}
          </tr>
        )
      })}
    </StyledWeek>
  )
}

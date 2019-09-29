import * as React from 'react'
import styled from 'styled-components'
import { YearMonthOption as MonthOption } from '../../atoms'
import moment from 'moment'

interface MonthOptionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledMonthOptions = styled.div<MonthOptionsProps>({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  textDecoration: 'none'
})

export const MonthOptions: React.FC<ButtonProps> = props => {
  const { currentMonthYear, setCurrentMonthYear, setPickerOpen, setMonthSelectOpen } = props

  const renderOptions = () => {
    let options = []
    for (let i = 1; i <= 12; i += 1) {
      options.push(
        <MonthOption
          href=""
          key={`month-${i.toString()}`}
          onClick={e => {
            e.preventDefault()
            setCurrentMonthYear(moment(currentMonthYear, 'YYYY MM').format(`YYYY ${i} `))
            setPickerOpen(false)
            setMonthSelectOpen(false)
          }}
        >
          {i}
        </MonthOption>
      )
    }

    return options
  }

  return <StyledMonthOptions>{renderOptions()}</StyledMonthOptions>
}

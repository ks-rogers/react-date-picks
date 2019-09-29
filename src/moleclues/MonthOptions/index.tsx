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
  const { value, setPickerOpen, setMonthSelectOpen, handleChange } = props

  const renderOptions = () => {
    let options = []
    for (let iM = 1; iM <= 12; iM += 1) {
      options.push(
        <MonthOption
          href=""
          key={`month-${iM.toString()}`}
          onClick={e => {
            e.preventDefault()
            handleChange(moment(value, 'YYYY-M-DD').format(`YYYY-${iM}`))
            {
              /* setCurrentMonthYear(moment(currentMonthYear, 'YYYY M').format(`YYYY ${i} `)) */
            }
            setPickerOpen(false)
            setMonthSelectOpen(false)
          }}
        >
          {iM}
        </MonthOption>
      )
    }

    return options
  }

  return <StyledMonthOptions>{renderOptions()}</StyledMonthOptions>
}

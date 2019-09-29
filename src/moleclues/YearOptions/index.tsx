import * as React from 'react'
import styled from 'styled-components'
import { YearMonthOption as YearOption } from '../../atoms'
import moment from 'moment'

interface YearOptionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledYearOptions = styled.div<YearOptionsProps>({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%'
})

export const YearOptions: React.FC<ButtonProps> = props => {
  const { value, setYearSelectOpen, setMonthSelectOpen, handleChange } = props

  const renderOptions = () => {
    let options = []
    for (let iY = 2019; iY > 2019 - 12; iY -= 1) {
      options.push(
        <YearOption
          href=""
          key={`years-${iY.toString()}`}
          onClick={e => {
            e.preventDefault()
            handleChange(moment(value, 'YYYY-M-DD').format(`${iY}-MM`))
            {
              /* setCurrentMonthYear(moment(currentMonthYear, 'YYYY M').format(`${iY} M`)) */
            }
            setYearSelectOpen(false)
            setMonthSelectOpen(true)
          }}
        >
          {iY}
        </YearOption>
      )
    }

    return options
  }

  return <StyledYearOptions>{renderOptions()}</StyledYearOptions>
}

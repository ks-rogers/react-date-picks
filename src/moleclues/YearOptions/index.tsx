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
  const { currentMonthYear, setCurrentMonthYear, setYearSelectOpen, setMonthSelectOpen } = props

  const renderOptions = () => {
    let options = []
    for (let i = 2019; i > 2019 - 12; i -= 1) {
      options.push(
        <YearOption
          href=""
          key={`years-${i.toString()}`}
          onClick={e => {
            e.preventDefault()
            setCurrentMonthYear(moment(currentMonthYear, 'YYYY M').format(`${i} M`))
            setYearSelectOpen(false)
            setMonthSelectOpen(true)
          }}
        >
          {i}
        </YearOption>
      )
    }

    return options
  }

  return <StyledYearOptions>{renderOptions()}</StyledYearOptions>
}

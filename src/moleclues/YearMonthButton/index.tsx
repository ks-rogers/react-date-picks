import * as React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { SelectButton } from '../../atoms'
interface YearMonthButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledYearMonthButton = styled.div<YearMonthButtonProps>``

export const YearMonthButton: React.FC<YearMonthButtonProps> = props => {
  const { setYearSelectOpen, setMonthSelectOpen, currentMonthYear } = props

  return (
    <StyledYearMonthButton {...props}>
      <SelectButton
        onClick={() => {
          setYearSelectOpen(true)
          setMonthSelectOpen(false)
        }}
      >
        {moment(currentMonthYear).format('YYYY')}
      </SelectButton>
      <SelectButton
        onClick={() => {
          setYearSelectOpen(false)
          setMonthSelectOpen(true)
        }}
      >
        {moment(currentMonthYear).format('M')}
      </SelectButton>
    </StyledYearMonthButton>
  )
}

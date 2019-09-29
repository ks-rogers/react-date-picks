import * as React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { SelectButton } from '../../atoms'
interface YearMonthButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledYearMonthButton = styled.div<YearMonthButtonProps>``

export const YearMonthButton: React.FC<YearMonthButtonProps> = props => {
  console.log(props)
  return (
    <StyledYearMonthButton {...props}>
      <SelectButton
        onClick={() => {
          props.setYearSelectOpen(true)
          props.setMonthSelectOpen(false)
        }}
      >
        {moment(props.currentMonthYear).format('YYYY')}
      </SelectButton>
      <SelectButton
        onClick={() => {
          props.setYearSelectOpen(false)
          props.setMonthSelectOpen(true)
        }}
      >
        {moment(props.currentMonthYear).format('M')}
      </SelectButton>
    </StyledYearMonthButton>
  )
}

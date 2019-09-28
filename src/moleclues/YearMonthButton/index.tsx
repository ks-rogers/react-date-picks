import * as React from 'react'
import styled from 'styled-components'
import { SelectButton } from '../../atoms'
interface YearMonthButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledYearMonthButton = styled.div<YearMonthButtonProps>``

export const YearMonthButton: React.FC<YearMonthButtonProps> = props => {
  return (
    <StyledYearMonthButton {...props}>
      <SelectButton />
      <SelectButton />
    </StyledYearMonthButton>
  )
}

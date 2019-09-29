import * as React from 'react'
import styled from 'styled-components'
import { YearMonthButton } from '../../moleclues'
interface YearMonthHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledYearMonthHeader = styled.div<YearMonthHeaderProps>``

export const YearMonthHeader: React.FC<YearMonthHeaderProps> = props => {
  return (
    <StyledYearMonthHeader {...props}>
      <YearMonthButton {...props} />
    </StyledYearMonthHeader>
  )
}

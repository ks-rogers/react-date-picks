import * as React from 'react'
import styled from 'styled-components'
import { YearOptions, MonthOptions } from '../../moleclues'
interface YearMonthBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledYearMonthBody = styled.div<YearMonthBodyProps>({
  maxHeight: '162px',
  overflowY: 'scroll',
  overflowX: 'hidden'
})

export const YearMonthBody: React.FC<YearMonthBodyProps> = props => {
  return (
    <StyledYearMonthBody {...props}>
      {props.yearSelectOpen && <YearOptions {...props} />}

      {props.monthSelectOpen && <MonthOptions {...props} />}
    </StyledYearMonthBody>
  )
}

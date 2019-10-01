import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import styled from 'styled-components'
import { YearMonthButton } from '../../moleclues'

interface YearMonthHeaderProps extends HTMLAttributes<HTMLDivElement> {
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  setPickerOpen: Dispatch<SetStateAction<boolean>>
  value: string
}

const StyledYearMonthHeader = styled.div<YearMonthHeaderProps>``

export const YearMonthHeader: React.FC<YearMonthHeaderProps> = props => {
  return (
    <StyledYearMonthHeader {...props}>
      <YearMonthButton {...props} />
    </StyledYearMonthHeader>
  )
}

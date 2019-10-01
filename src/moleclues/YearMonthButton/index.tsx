import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { SelectButton } from '../../atoms'
interface YearMonthButtonProps extends HTMLAttributes<HTMLDivElement> {
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
}

const StyledYearMonthButton = styled.div<YearMonthButtonProps>``

export const YearMonthButton: React.FC<YearMonthButtonProps> = props => {
  const { setYearSelectOpen, setMonthSelectOpen, value } = props

  return (
    <StyledYearMonthButton {...props}>
      <SelectButton
        onClick={() => {
          setYearSelectOpen(true)
          setMonthSelectOpen(false)
        }}
      >
        {moment(value).format('YYYY')}
      </SelectButton>
      <SelectButton
        onClick={() => {
          setYearSelectOpen(false)
          setMonthSelectOpen(true)
        }}
      >
        {moment(value).format('M')}
      </SelectButton>
    </StyledYearMonthButton>
  )
}

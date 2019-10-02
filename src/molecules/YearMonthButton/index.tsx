import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { SelectButton } from '../../atoms'
interface YearMonthButtonProps extends HTMLAttributes<HTMLDivElement> {
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  overrides: ComponentOverrides
}

const YearMonthButtonTemplate = {
  textAlign: 'center'
}

export const YearMonthButton: React.FC<YearMonthButtonProps> = props => {
  const { setYearSelectOpen, setMonthSelectOpen, value, overrides } = props

  console.log(overrides.YearMonthButton)
  const StyledYearMonthButton = styled.div(getOverrideCSSProperties(YearMonthButtonTemplate, overrides.YearMonthButton))
  console.log(StyledYearMonthButton)

  return (
    <StyledYearMonthButton>
      <SelectButton
        overrides={overrides}
        onClick={() => {
          setYearSelectOpen(true)
          setMonthSelectOpen(false)
        }}
      >
        {moment(value).format('YYYY')}
      </SelectButton>
      <SelectButton
        overrides={overrides}
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

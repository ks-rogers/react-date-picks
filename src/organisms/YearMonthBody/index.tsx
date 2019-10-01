import React, { Dispatch, SetStateAction, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { YearOptions, MonthOptions } from '../../moleclues'
interface YearMonthBodyProps extends HTMLAttributes<HTMLDivElement> {
  handleChange: (target: string) => void
  setPickerOpen: Dispatch<SetStateAction<boolean>>
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  yearSelectOpen: boolean
  monthSelectOpen: boolean
}

const StyledYearMonthBody = styled.div<YearMonthBodyProps>({
  maxHeight: '162px',
  overflowY: 'scroll',
  overflowX: 'hidden'
})

export const YearMonthBody: React.FC<YearMonthBodyProps> = props => {
  const { handleChange, setPickerOpen, setYearSelectOpen, setMonthSelectOpen, value } = props
  return (
    <StyledYearMonthBody {...props}>
      {props.yearSelectOpen && (
        <YearOptions
          handleChange={handleChange}
          setYearSelectOpen={setYearSelectOpen}
          setMonthSelectOpen={setMonthSelectOpen}
          value={value}
        />
      )}

      {props.monthSelectOpen && (
        <MonthOptions
          handleChange={handleChange}
          setPickerOpen={setPickerOpen}
          setMonthSelectOpen={setMonthSelectOpen}
          value={value}
        />
      )}
    </StyledYearMonthBody>
  )
}

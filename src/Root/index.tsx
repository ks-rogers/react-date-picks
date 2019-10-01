import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Override } from '../overrides'
import { DateField } from '../atoms'
import { YearMonthHeader, YearMonthBody } from '../organisms'
import moment from 'moment'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  handleChange: () => void
  value: string
  dateFormat?: string
  placeholder: string
  locale?: string
  overrides?: RootOverrides
}

interface RootOverrides {
  Root?: Override<any>
}

const StyledRoot = styled.div({
  position: 'relative',
  marginTop: '16px',
  border: '1px solid #cccccc',
  borderRadius: '4px',
  padding: '16px',
  background: '#fff',
  width: '480px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '20px',
    top: '-15px',
    borderRight: '15px solid transparent',
    borderBottom: '15px solid #cccccc',
    borderLeft: '15px solid transparent'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '20px',
    top: '-14px',
    borderRight: '15px solid transparent',
    borderBottom: '15px solid #ffffff',
    borderLeft: '15px solid transparent'
  }
})

export const ReactDatePicks: React.FC<RootProps> = (props: RootProps) => {
  const { overrides = {}, handleChange, locale = 'en', dateFormat = 'YYYY-M-DD', value, placeholder } = props
  console.log(overrides)
  useEffect(() => {
    if (locale !== 'en') moment.locale(locale)
  }, [locale])

  const [pickerOpen, setPickerOpen] = useState(false)
  const [yearSelectOpen, setYearSelectOpen] = useState(false)
  const [monthSelectOpen, setMonthSelectOpen] = useState(false)

  return (
    <React.Fragment>
      <DateField
        onClick={() => {
          setPickerOpen(true)
          setYearSelectOpen(true)
        }}
        placeholder={placeholder}
        onFocus={() => {
          setPickerOpen(true)
          setYearSelectOpen(true)
        }}
        value={value && moment(value, 'YYYY-M-DD').format(dateFormat)}
      />
      {pickerOpen && (
        <StyledRoot>
          <YearMonthHeader
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            setPickerOpen={setPickerOpen}
            value={value}
          />
          <YearMonthBody
            handleChange={handleChange}
            setPickerOpen={setPickerOpen}
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            value={value}
            yearSelectOpen={yearSelectOpen}
            monthSelectOpen={monthSelectOpen}
          />
        </StyledRoot>
      )}
    </React.Fragment>
  )
}

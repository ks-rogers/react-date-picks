import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DateField } from '../atoms'
import { YearMonthHeader, YearMonthBody } from '../organisms'
import moment from 'moment'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  handleChange: () => void
  value: string
  dateFormat?: string
  placeholder: string
  locale?: string
}

const StyledRoot = styled.div<RootProps>({
  marginTop: '16px',
  border: '1px solid #cccccc',
  borderRadius: '4px',
  padding: '16px',
  background: '#fff',
  width: '100%'
})

export const ReactDatePicks: React.FC<RootProps> = (props: RootProps) => {
  const { handleChange, locale = 'en', dateFormat = 'YYYY-M-DD', value, placeholder } = props

  useEffect(() => {
    if (locale !== 'en') moment.locale(locale)
  }, [locale])

  const [pickerOpen, setPickerOpen] = useState(false)
  const [yearSelectOpen, setYearSelectOpen] = useState(false)
  const [monthSelectOpen, setMonthSelectOpen] = useState(false)

  return (
    <React.Fragment>
      <DateField
        readonly
        onClick={() => {
          setPickerOpen(true)
          setYearSelectOpen(true)
        }}
        placeholder={placeholder}
        onFocus={() => {
          setPickerOpen(true)
          setYearSelectOpen(true)
        }}
        readOnly
        value={value && moment(value, 'YYYY-M-DD').format(dateFormat)}
      />
      {pickerOpen && (
        <StyledRoot>
          <YearMonthHeader
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            setPickerOpen={setPickerOpen}
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

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../helpers/overrides'
import { Divider } from '../atoms'
import { DateFieldLabeled } from '../molecules'
import { YearMonthHeader, YearMonthBody, CalendarHeader, CalendarBody } from '../organisms'
import moment from 'moment'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  handleChange: () => void
  value: string
  dateFormat?: string
  placeholder: string
  locale?: string
  overrides?: ComponentOverrides
  disabled?: boolean
}

const RootTemplate = {
  position: 'relative',
  marginTop: '16px',
  border: '1px solid #cccccc',
  borderRadius: '4px',
  padding: '0 0 16px 0',
  background: '#fff',
  width: '380px',
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
}

export const DatePicker: React.FC<RootProps> = (props: RootProps) => {
  const {
    disabled = false,
    overrides = {},
    handleChange,
    locale = 'en',
    dateFormat = 'YYYY-M-DD',
    value,
    placeholder
  } = props

  useEffect(() => {
    if (locale !== 'en') moment.locale(locale)
  }, [locale])

  const [pickerOpen, setPickerOpen] = useState(false)
  const [yearSelectOpen, setYearSelectOpen] = useState(false)
  const [monthSelectOpen, setMonthSelectOpen] = useState(false)

  const StyledRoot = styled.div(getOverrideCSSProperties(RootTemplate, overrides.Root))

  return (
    <React.Fragment>
      <DateFieldLabeled
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
        overrides={overrides}
        disabled={disabled}
      />
      {pickerOpen && (
        <StyledRoot>
          <YearMonthHeader
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            setPickerOpen={setPickerOpen}
            value={value}
            overrides={overrides}
          />
          <Divider overrides={overrides} />
          <YearMonthBody
            handleChange={handleChange}
            setPickerOpen={setPickerOpen}
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            value={value}
            yearSelectOpen={yearSelectOpen}
            monthSelectOpen={monthSelectOpen}
            overrides={overrides}
          />
        </StyledRoot>
      )}
      <StyledRoot>
        <CalendarHeader overrides={overrides}></CalendarHeader>
        <CalendarBody overrides={overrides} />
      </StyledRoot>
    </React.Fragment>
  )
}

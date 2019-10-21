import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../helpers/overrides'
import { Divider } from '../atoms'
import { DateFieldLabeled } from '../molecules'
import { YearMonthHeader, YearMonthBody, CalendarHeader, CalendarBody } from '../organisms'
import dayjs from 'dayjs'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  yearMonthPicker?: boolean
  handleChange: (target: string) => void
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
  padding: '24px',
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
    locale = 'en-ca',
    dateFormat = 'YYYY-MM-DDTHH:mm:ssZ', // ISO08601
    value,
    placeholder,
    yearMonthPicker = false
  } = props

  const [localeMap, setLocaleMap] = useState(null)

  useEffect(() => {
    const load = async () => {
      const localeMap: any = await import(`dayjs/locale/${locale}`)
      setLocaleMap(localeMap.default)
    }
    load()
  }, [locale])

  const [yearMonthPickerOpen, setYearMonthPickerOpen] = useState(false)
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  const [yearSelectOpen, setYearSelectOpen] = useState(false)
  const [monthSelectOpen, setMonthSelectOpen] = useState(false)
  const StyledRoot = styled.div(getOverrideCSSProperties(RootTemplate, overrides.Root))

  return (
    <React.Fragment>
      <DateFieldLabeled
        onClick={() => {
          if (yearMonthPicker) {
            setYearMonthPickerOpen(true)
            setYearSelectOpen(true)
          }
          if (!yearMonthPicker) {
            setDatePickerOpen(true)
          }
        }}
        placeholder={placeholder}
        onFocus={() => {
          if (yearMonthPicker) {
            setYearMonthPickerOpen(true)
            setYearSelectOpen(true)
          } else {
            setDatePickerOpen(true)
          }
        }}
        value={value && dayjs(value).format(dateFormat)}
        overrides={overrides}
        disabled={disabled}
      />

      {!yearMonthPicker && datePickerOpen && (
        <StyledRoot>
          <CalendarHeader
            value={value && dayjs(value).format(dateFormat)}
            overrides={overrides}
            handleChange={handleChange}
            dateFormat={dateFormat}
          ></CalendarHeader>
          <CalendarBody
            handleChange={handleChange}
            localeMap={localeMap}
            dateFormat={dateFormat}
            value={value && dayjs(value).format(dateFormat)}
            overrides={overrides}
            setDatePickerOpen={setDatePickerOpen}
          />
        </StyledRoot>
      )}

      {yearMonthPicker && yearMonthPickerOpen && (
        <StyledRoot>
          <YearMonthHeader
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            value={value}
            overrides={overrides}
          />
          <Divider overrides={overrides} />
          <YearMonthBody
            handleChange={handleChange}
            setYearMonthPickerOpen={setYearMonthPickerOpen}
            setPickerOpen={setDatePickerOpen}
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            value={value}
            yearSelectOpen={yearSelectOpen}
            monthSelectOpen={monthSelectOpen}
            overrides={overrides}
            dateFormat={dateFormat}
          />
        </StyledRoot>
      )}
    </React.Fragment>
  )
}

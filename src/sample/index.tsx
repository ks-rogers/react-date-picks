import React, { useState } from 'react'
import { DateField } from '../atoms'
import { YearMonthHeader, YearMonthBody } from '../organisms'
import moment from 'moment'

export const Sample = () => {
  const dateFormat: string = 'YYYY MM'
  const placeholder: string = '時間'
  const [pickerOpen, setPickerOpen] = useState(false)
  const [yearSelectOpen, setYearSelectOpen] = useState(false)
  const [monthSelectOpen, setMonthSelectOpen] = useState(false)
  const [currentMonthYear, setCurrentMonthYear] = useState(moment(new Date(), 'YYYY MM').format(dateFormat))
  console.log(moment(currentMonthYear).format('YYYY'))
  return (
    <React.Fragment>
      <DateField
        readonly
        onClick={() => {
          setPickerOpen(true)
          setYearSelectOpen(true)
        }}
        placeholder={placeholder}
        onFocus={() => setPickerOpen(true)}
        readOnly
        value={moment(currentMonthYear, 'YYYY MM').format(dateFormat)}
      />
      {pickerOpen && (
        <div>
          <YearMonthHeader
            currentMonthYear={currentMonthYear}
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            setPickerOpen={setPickerOpen}
          />
          <YearMonthBody
            setPickerOpen={setPickerOpen}
            setYearSelectOpen={setYearSelectOpen}
            setMonthSelectOpen={setMonthSelectOpen}
            currentMonthYear={currentMonthYear}
            setCurrentMonthYear={setCurrentMonthYear}
            yearSelectOpen={yearSelectOpen}
            monthSelectOpen={monthSelectOpen}
          />
        </div>
      )}
    </React.Fragment>
  )
}

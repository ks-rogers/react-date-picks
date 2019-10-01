/* eslint-disable no-console */
import React, { useState } from 'react'
import { ReactDatePicks } from '../src'
import '../assets/index.less'
import moment from 'moment'

const ComponentsOptions = [
  'Root',
  'YearMonthHeader',
  'YearMonthBody',
  'MonthOptions',
  'YearMonthButton',
  'YearOptions',
  'DateField',
  'YearMonthOption',
  'SelectButton'
]

const Test: React.FC = () => {
  const [value, setValue] = useState(moment(new Date(), 'YYYY M').format('YYYY M'))
  const [selectValue, setSelectValue] = useState('Root')
  const handleChange = (value: string) => {
    setValue(value)
  }
  const updateOperator = value => {
    setSelectValue(value)
  }
  return (
    <div>
      <h2>Component Override</h2>
      <div>
        <select
          value={selectValue}
          onChange={e => {
            updateOperator(e.target.value)
          }}
        >
          {ComponentsOptions.map(data => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            )
          })}
        </select>
      </div>

      <ReactDatePicks
        value={value}
        handleChange={handleChange}
        placeholder="year month"
        overrides={{
          [selectValue]: {
            style: { backgroundColor: '#F7BFA5' }
          }
        }}
      />
    </div>
  )
}

export default Test
/* eslint-enable */

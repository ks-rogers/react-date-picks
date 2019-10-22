import React, { useState } from 'react'
import { DatePicker } from '../src'
import '../assets/index.less'
import dayjs from 'dayjs'

const ComponentsOptions = [
  'Root',
  'YearMonthHeader',
  'YearMonthBody',
  'MonthOptions',
  'YearMonthButton',
  'YearOptions',
  'DateField',
  'Label',
  'Divider',
  'DateFieldLabeled',
  'YearMonthOption',
  'SelectButton'
]

const Test: React.FC = () => {
  const [value, setValue] = useState(dayjs().format('YYYY M'))
  const [selectValue, setSelectValue] = useState('Root')
  const handleChange = (value: string) => {
    setValue(value)
  }
  const updateOperator = (value: string) => {
    setSelectValue(value)
  }
  return (
    <div>
      <h2>Component Override</h2>
      <div>
        {ComponentsOptions.map(data => {
          return (
            <React.Fragment key={data}>
              <label>{data}</label>
              <input
                type="radio"
                name="component"
                value={data}
                onChange={e => updateOperator(e.target.value)}
                checked={data === selectValue}
              />{' '}
              <br />
            </React.Fragment>
          )
        })}
      </div>

      <DatePicker
        value={value}
        handleChange={handleChange}
        yearMonthPicker={true}
        placeholder="year month"
        overrides={{
          [selectValue]: {
            style: { backgroundColor: '#F7BFA5', padding: '15px' }
          }
        }}
      />
    </div>
  )
}

export default Test

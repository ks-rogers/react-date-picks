/* eslint-disable no-console */
import React, { useState, Fragment } from 'react'
import { DatePicker } from '../src'
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
  'Label',
  'Divider',
  'DateFieldLabeled',
  'YearMonthOption',
  'SelectButton'
]

const Test: React.FC = () => {
  const [value, setValue] = useState(moment(new Date(), 'YYYY M').format('YYYY M'))
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
            <Fragment key={data}>
              <label>{data}</label>
              <input
                type="radio"
                name="component"
                value={data}
                onChange={e => updateOperator(e.target.value)}
                checked={data === selectValue}
              />{' '}
              <br />
            </Fragment>
          )
        })}
      </div>

      <DatePicker
        value={value}
        handleChange={handleChange}
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
/* eslint-enable */

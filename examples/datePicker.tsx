/* eslint-disable no-console */
import React, { useState } from 'react'
import { DatePicker } from '../src'
import '../assets/index.less'
import dayjs from 'dayjs'

const Test: React.FC = () => {
  const [value, setValue] = useState(dayjs(new Date(), 'YYYY M').format('YYYY M'))
  const handleChange = value => {
    setValue(value)
  }
  return (
    <div>
      <h2>Sample Components Example</h2>
      <DatePicker
        value={value}
        handleChange={handleChange}
        dateFormat="YYYY-M-DD"
        locale="ja"
        placeholder="year month"
      />
    </div>
  )
}

export default Test
/* eslint-enable */

import React, { useState } from 'react'
import { DatePicker } from '../src'
import '../assets/index.less'
import dayjs from 'dayjs'

const Test: React.FC = () => {
  const [value, setValue] = useState(dayjs().format('YYYY M'))
  const handleChange = (value: string) => {
    setValue(value)
  }
  return (
    <div>
      <h2>Sample Components Example</h2>
      <DatePicker value={value} handleChange={handleChange} dateFormat="YYYY M" placeholder="year month" />
    </div>
  )
}

export default Test

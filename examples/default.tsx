/* eslint-disable no-console */
import React, { useState } from 'react'
import { ReactDatePicks } from '../src'
import '../assets/index.less'
import moment from 'moment'

const Test: React.FC = () => {
  const [value, setValue] = useState(moment(new Date(), 'YYYY M').format('YYYY M'))
  const handleChange = value => {
    console.log(`value: ${value}`)
    setValue(value)
  }
  return (
    <div>
      <h2>Sample Components Example</h2>
      <ReactDatePicks value={value} handleChange={handleChange} dateFormat="YYYY M" placeholder="year month" />
    </div>
  )
}

export default Test
/* eslint-enable */

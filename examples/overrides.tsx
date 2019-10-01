/* eslint-disable no-console */
import React, { useState } from 'react'
import { ReactDatePicks } from '../src'
import '../assets/index.less'
import moment from 'moment'

const Test: React.FC = () => {
  const [value, setValue] = useState(moment(new Date(), 'YYYY M').format('YYYY M'))
  const handleChange = (value: string) => {
    setValue(value)
  }
  return (
    <div>
      <h2>Component Override</h2>
      <ReactDatePicks
        value={value}
        handleChange={handleChange}
        placeholder="year month"
        overrides={{
          Root: {
            style: { width: '100%' }
          }
        }}
      />
    </div>
  )
}

export default Test
/* eslint-enable */

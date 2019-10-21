import * as React from 'react'
import { DatePicker } from '../src'
import '../assets/index.less'
import * as dayjs from 'dayjs'

const Test: React.FC = () => {
  const [value, setValue] = React.useState(dayjs(new Date()).format('YYYY M'))
  const handleChange = (value: string) => {
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

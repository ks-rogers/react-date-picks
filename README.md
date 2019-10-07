# react-date-picks
A date picker for your React app.

Pick days, months, years.
No moment.js used

## Screenshots


## Demo
[#](Online demo is available here)

OR

```
yarn
yarn start
```

## Getting started

### Compatibility

You need to use React 16 or later in project.

### Installation

```
yarn add react-date-picks
```

### Usage

### With Formik

### Override styles


### basic use

```js

import React, { useState } from 'react'
import { DatePicker } from '../src'
import '../assets/index.less'
import dayjs from 'dayjs'

const Sample: React.FC = () => {
  const [value, setValue] = useState(dayjs(new Date(), 'YYYY M').format('YYYY M'))
  const handleChange = value => {
    setValue(value)
  }
  return (
  <DatePicker
    value={value}
    handleChange={handleChange}
    dateFormat="YYYY-M-DD"
    locale="ja"
    placeholder="year month"
  />
)

React.render(Sample, container)
```

## API

### Props

| name     | type    | description     | default  |
|----------|-------|----------|--------------|
|yearMonthPicker | boolean |  Whether the year month picker | false |
|handleChange | (target: string) => void | handleChange function | - |
|value | string | Input value | - |
|dateFormat | (optional) string | Input format based on [Unicode Technical Standard](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Supported values are: `y`, `M`, `MM`, `MMM`, `MMMM`, `d`, `dd`. | 'YYYY-MM-DDTHH:mm:ssZ' |
|placeholder | (optional) string | Input placeholder | - |
|locale | (optional) string | [IETF tag](https://en.wikipedia.org/wiki/IETF_language_tag) | 'en-ca' |
|overrides | (optional) string | Styles for override | {} |
|disabled | (optional) boolean | Whether input is disabled or not | false |


### Methods

| name     | description    | parameters | return      |
|----------|----------------|----------|--------------|
|focus     | focus select programmably | - | - |
|blur     | blur select programmably | - | - |




## License

K.S.Rogers is released under the MIT license.

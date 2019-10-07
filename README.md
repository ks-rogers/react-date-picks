# react-date-picks
A date picker for your React app.

Pick days, months, years.
No moment.js used.

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


```js

import React, { useState } from 'react'
import DatePicker from 'react-date-picks'
import dayjs from 'dayjs'

const Sample: React.FC = () => {
  const [value, setValue] = useState(dayjs().format())
  const handleChange = value => {
    setValue(value)
  }
  return (
  <DatePicker
    value={value}
    handleChange={handleChange}
    dateFormat="YYYY-M-DD"
    locale="ja"
    placeholder="year month picker"
  />
)

React.render(Sample, container)
```

### With Formik

```js

import React from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-date-picks'
import { Formik, Field } from 'formik'

const Sample: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ date: dayjs().format() }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field component={DatePickerWithFormik} required />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}

const DatePickerWithFormik = ({ form: { setFieldValue, values } }) => {
  return (
    <DatePicker
      value={values.date}
      placeholder="year month"
      yearMonthPicker={true}
      handleChange={date => {
        setFieldValue('date', date)
      }}
      locale="ja"
    />
  )
}

React.render(Sample, container)
```


### Override styles



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

## License

K.S.Rogers is released under the MIT license.

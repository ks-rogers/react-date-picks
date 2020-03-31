# @ks-rogers/react-date-picks
A date picker for your React app.

Pick days, months, years.
No moment.js used.

## Screenshots


## Demo
[Online demo is available here](https://ks-rogers.github.io/react-date-picks/?selectedKind=%40ks-rogers%2Freact-date-picks&selectedStory=readMe&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

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
yarn add @ks-rogers/react-date-picks
```

### Usage


```js

import React, { useState } from 'react'
import DatePicker from '@ks-rogers/react-date-picks'
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
import DatePicker from '@ks-rogers/react-date-picks'
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

Each internal components is given an identifier and exposed as a target for overrides.
When overriding style with overrides props, you can pass a style object.

The style object you return from this API is deep merged with the default component styles.
Please refer to the code snippet below.

```js
import React, { useState, Fragment } from 'react'
import DatePicker from '@ks-rogers/react-date-picks'
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

const Sample: React.FC = () => {
  const [value, setValue] = useState(dayjs().format())
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
|placeholder | string | Input placeholder | - |
|locale | (optional) string | [IETF tag](https://en.wikipedia.org/wiki/IETF_language_tag) | 'en-ca' |
|overrides | (optional) string | Styles for override | {} |
|disabled | (optional) boolean | Whether input is disabled or not | false |

## How to use with Next.js
### Recommendation
Next.js 9.2.2 or later

### Handling styled-components problem
If you already use styled-components in Next.js project, `several instances problem` may occur.  
To avoid the problem, please refer to [styled-components docs](https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page).

## License

@ks-rogers/react-date-picks is available under the MIT license. See the [LICENSE](./LICENSE.md) file for more info.

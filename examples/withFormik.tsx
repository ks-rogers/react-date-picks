import React from 'react'
import { DatePicker } from '../src'
import '../assets/index.less'
import dayjs from 'dayjs'
import { Formik, Field } from 'formik'

const Test: React.FC = () => {
  return (
    <div>
      <h2>With formik</h2>
      <p>
        react-date-picks can be used with Formik by utilising setFieldValue. For more detail, refer to the source tab
        below.{' '}
      </p>
      <Formik
        initialValues={{ date: dayjs().format('YYYY MM') }}
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
    </div>
  )
}

const DatePickerWithFormik = ({ form: { setFieldValue, values } }) => {
  return (
    <DatePicker
      value={values.date}
      placeholder="year month"
      yearMonthPicker={true}
      handleChange={(date: string) => {
        setFieldValue('date', date)
      }}
      dateFormat="YYYY-MM"
      locale="ja"
    />
  )
}

export default Test

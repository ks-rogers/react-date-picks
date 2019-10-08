import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'

interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  overrides?: ComponentOverrides
  value: string
}

const DateFieldTemplate = {
  minWidth: '480px',
  padding: '10px',
  fontSize: '12px',
  color: '#aaa',
  border: 'solid 1px #ccc',
  margin: '5px 0 0 0',
  MozBoxSizing: 'border-box',
  boxSizing: 'border-box'
}

export const DateField: React.FC<DateFieldProps> = props => {
  const { overrides, ...others } = props

  const StyledDateField = styled.input(getOverrideCSSProperties(DateFieldTemplate, overrides.DateField))

  return (
    <StyledDateField {...others} readOnly>
      {props.children}
    </StyledDateField>
  )
}

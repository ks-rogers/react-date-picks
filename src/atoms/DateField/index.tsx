import * as React from 'react'
import styled from 'styled-components'

interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledDateField = styled.input<DateFieldProps>`
  padding: 10px;
  font-size: 12px;
  color: #aaa;
  border: solid 1px #ccc;
  margin: 5px 0 20px 0;
  width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

export const DateField: React.FC<DateFieldProps> = props => (
  <StyledDateField {...props}>{props.children}</StyledDateField>
)

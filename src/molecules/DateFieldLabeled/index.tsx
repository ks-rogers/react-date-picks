import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'
import { Label, DateField } from '../../atoms'

interface DateFieldLabeledProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void
  onFocus: () => void
  overrides?: ComponentOverrides
  placeholder: string
  value: string
}

const DateFieldLabeledTemplate = {}

export const DateFieldLabeled: React.FC<DateFieldLabeledProps> = props => {
  const { placeholder, overrides, ...others } = props

  const StyledDateFieldLabeled = styled.div(
    getOverrideCSSProperties(DateFieldLabeledTemplate, overrides.DateFieldLabeled)
  )

  return (
    <StyledDateFieldLabeled>
      <Label overrides={overrides}>{placeholder}</Label>
      <DateField overrides={overrides} {...others} />
    </StyledDateFieldLabeled>
  )
}

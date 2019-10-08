import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  overrides?: ComponentOverrides
}

const LabelTemplate = {
  display: 'block',
  fontWeight: 600
}

export const Label: React.FC<LabelProps> = props => {
  const { overrides, children, ...others } = props

  const StyledLabel = styled.span(getOverrideCSSProperties(LabelTemplate, overrides.Label))

  return <StyledLabel {...others}>{children}</StyledLabel>
}

import * as React from 'react'
import styled from 'styled-components'
import { ComponentOverrides, getOverrideCSSProperties } from '../../helpers/overrides'

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  overrides?: ComponentOverrides
}

const DividerTemplate = {
  margin: '0 0 16px 0',
  height: '1px',
  backgroundColor: '#cccccc',
  border: 'none'
}

export const Divider: React.FC<DividerProps> = props => {
  const { overrides, ...others } = props

  const StyledDivider = styled.hr(getOverrideCSSProperties(DividerTemplate, overrides.Divider))

  return <StyledDivider {...others} />
}

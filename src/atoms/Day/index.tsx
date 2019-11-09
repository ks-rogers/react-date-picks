import React, { TdHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface DayProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  overrides: ComponentOverrides
}

const DayTemplate = {
  padding: ' 0.9em 0',
  border: '1px solid #cccccc',
  textAlign: 'center',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#C4C4C4'
  }
}

export const Day: React.FC<DayProps> = props => {
  const { overrides, children } = props

  const StyledDay = styled.td(getOverrideCSSProperties(DayTemplate, overrides.Day))

  return <StyledDay>{children}</StyledDay>
}

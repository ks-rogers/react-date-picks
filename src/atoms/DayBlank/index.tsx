import React, { TdHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface DayBlankProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  overrides: ComponentOverrides
}

const DayBlankTemplate = {
  height: '52px',
  border: 'none'
}

export const DayBlank: React.FC<DayBlankProps> = props => {
  const { overrides, children } = props

  const StyledDayBlank = styled.td(getOverrideCSSProperties(DayBlankTemplate, overrides.DayBlank))

  return <StyledDayBlank>{children}</StyledDayBlank>
}

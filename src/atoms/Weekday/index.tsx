import React, { ThHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface WeekdayProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  overrides: ComponentOverrides
}

const WeekdayTemplate = {
  color: '#aaaaaa',
  fontWeight: 400,
  width: '14.28%'
}

export const Weekday: React.FC<WeekdayProps> = props => {
  const { overrides, children } = props

  const StyledWeekday = styled.th(getOverrideCSSProperties(WeekdayTemplate, overrides.Weekday))

  return <StyledWeekday>{children}</StyledWeekday>
}

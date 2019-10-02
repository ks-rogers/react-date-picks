import React from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface YearMonthOptionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  overrides: ComponentOverrides
}

const YearMonthOptionTemplate = {
  display: 'flex',
  background: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25%',
  padding: '15px',
  position: 'relative',
  textDecoration: 'none',
  transition: 'none',
  cursor: 'pointer',
  color: '#000000',
  ':hover': {
    backgroundColor: '#C4C4C4'
  }
}

export const YearMonthOption: React.FC<YearMonthOptionProps> = props => {
  const { children, overrides } = props

  const StyledYearMonthOption = styled.a(getOverrideCSSProperties(YearMonthOptionTemplate, overrides.YearMonthOption))

  return <StyledYearMonthOption {...props}>{children}</StyledYearMonthOption>
}

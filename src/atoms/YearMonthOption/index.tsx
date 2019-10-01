import React from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties } from '../../helpers/overrides'

interface YearMonthOptionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const yearMonthOptionStringArray = {
  display: 'flex',
  background: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25%',
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
  const { children } = props

  const StyledYearMonthOption = styled.a(getOverrideCSSProperties(yearMonthOptionStringArray, { color: 'red' }))

  return <StyledYearMonthOption {...props}>{children}</StyledYearMonthOption>
}

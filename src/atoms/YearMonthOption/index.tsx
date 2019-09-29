import * as React from 'react'
import styled from 'styled-components'

interface YearMonthOptionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const originalProps = {
  display: 'flex',
  background: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25%',
  position: 'relative',
  textDecoration: 'none',
  transition: 'none',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#C4C4C4'
  }
}

const overrideProps = {
  padding: '15px 0'
}

const StyledYearMonthOption = styled.a<YearMonthOptionProps>({
  ...originalProps,
  ...overrideProps
})

export const YearMonthOption: React.FC<ButtonProps> = props => {
  const { children } = props
  return <StyledYearMonthOption {...props}>{children}</StyledYearMonthOption>
}

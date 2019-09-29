import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledSelectButton = styled.button<ButtonProps>({
  width: '50%',
  backgroundColor: '#2755FB',
  color: '#fff',
  border: '2px solid #2755FB',
  borderRadius: '2px',
  padding: '12px 0px'
})

export const SelectButton: React.FC<ButtonProps> = props => {
  const { children, ...others } = props
  return <StyledSelectButton {...others}>{children}</StyledSelectButton>
}

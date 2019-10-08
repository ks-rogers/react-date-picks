import * as React from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  overrides: ComponentOverrides
}

const SelectButtonTemplate = {
  width: '46%',
  margin: '0 2%',
  backgroundColor: '#2755FB',
  color: '#fff',
  border: '2px solid #2755FB',
  borderRadius: '2px',
  padding: '12px 0px'
}

export const SelectButton: React.FC<ButtonProps> = props => {
  const { children, overrides, ...others } = props

  const StyledSelectButton = styled.button(getOverrideCSSProperties(SelectButtonTemplate, overrides.SelectButton))

  return <StyledSelectButton {...others}>{children}</StyledSelectButton>
}

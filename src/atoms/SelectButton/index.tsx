import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledSelectButton = styled.button<ButtonProps>``

export const SelectButton: React.FC<ButtonProps> = () => {
  return <StyledSelectButton>{`1988年`}</StyledSelectButton>
}

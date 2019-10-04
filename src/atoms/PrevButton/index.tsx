import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface PrevButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  overrides: ComponentOverrides
}

const PrevButtonTemplate = {}

export const PrevButton: React.FC<PrevButtonProps> = props => {
  const { overrides } = props

  const StyledPrevButton = styled.button(getOverrideCSSProperties(PrevButtonTemplate, overrides.PrevButton))

  return (
    <StyledPrevButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </StyledPrevButton>
  )
}

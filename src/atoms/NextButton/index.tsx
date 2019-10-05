import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import moment from 'moment'

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  overrides: ComponentOverrides
  handleChange: (target: string) => void
  value: string
}

const NextButtonTemplate = {
  backgroundColor: 'Transparent',
  backgroundRepeat: 'no-repeat',
  border: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  outline: 'none'
}

export const NextButton: React.FC<NextButtonProps> = props => {
  const { overrides, handleChange, value } = props

  const StyledNextButton = styled.button(getOverrideCSSProperties(NextButtonTemplate, overrides.NextButton))

  return (
    <StyledNextButton
      onClick={e => {
        e.preventDefault()
        // TODO
        handleChange(moment(value, 'YYYY-M-DD').format(`YYYY-MM-DD`))
        console.log(value)
      }}
    >
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
        className="feather feather-chevron-right"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </StyledNextButton>
  )
}

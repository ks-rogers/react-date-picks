import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import dayjs, { UnitType } from 'dayjs'

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  target: UnitType
  handleChange: (target: string) => void
  value: string
  dateFormat: string
  overrides: ComponentOverrides
}

const NextButtonTemplate = {
  padding: '5px 6px',
  backgroundColor: 'Transparent',
  backgroundRepeat: 'no-repeat',
  border: '1px solid #cccccc',
  cursor: 'pointer',
  overflow: 'hidden',
  outline: 'none'
}

export const NextButton: React.FC<NextButtonProps> = props => {
  const { overrides, handleChange, value, target, dateFormat } = props

  const StyledNextButton = styled.button(getOverrideCSSProperties(NextButtonTemplate, overrides.NextButton))

  return (
    <StyledNextButton
      onClick={e => {
        e.preventDefault()

        if (target === 'month') {
          const nextMonth: number = dayjs(value).month() + 1
          handleChange(
            dayjs(value)
              .set(target, nextMonth)
              .format(dateFormat)
          )
        }
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

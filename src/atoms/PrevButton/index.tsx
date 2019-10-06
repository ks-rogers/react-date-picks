import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import dayjs, { UnitType } from 'dayjs'

interface PrevButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  target: UnitType
  handleChange: (target: string) => void
  value: string
  dateFormat: string
  overrides: ComponentOverrides
}

const PrevButtonTemplate = {
  padding: '5px 6px',
  backgroundColor: 'Transparent',
  backgroundRepeat: 'no-repeat',
  border: '1px solid #cccccc',
  cursor: 'pointer',
  overflow: 'hidden',
  outline: 'none'
}

export const PrevButton: React.FC<PrevButtonProps> = props => {
  const { overrides, handleChange, value, target, dateFormat } = props

  const StyledPrevButton = styled.button(getOverrideCSSProperties(PrevButtonTemplate, overrides.PrevButton))

  return (
    <StyledPrevButton
      onClick={e => {
        e.preventDefault()

        if (target === 'month') {
          const prevMonth: number = dayjs(value).month() - 1
          handleChange(
            dayjs(value)
              .set(target, prevMonth)
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
        className="feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </StyledPrevButton>
  )
}

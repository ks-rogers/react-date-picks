import React, { Fragment } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  overrides: ComponentOverrides
  active?: boolean
}

const SelectButtonDeactivatedTemplate = {
  width: '46%',
  margin: '0 2%',
  fontSize: '14px',
  border: '1px solid #cccccc',
  borderRadius: '2px',
  padding: '12px 0px'
}

const SelectButtonActiveTemplate = {
  width: '46%',
  margin: '0 2%',
  fontSize: '14px',
  backgroundColor: '#2755FB',
  color: '#fff',
  border: '1px solid #2755FB',
  borderRadius: '2px',
  padding: '12px 0px'
}

export const SelectButton: React.FC<ButtonProps> = props => {
  const { children, overrides, active = true, ...others } = props

  const StyledSelectButtonDeactivated = styled.button(
    getOverrideCSSProperties(SelectButtonDeactivatedTemplate, overrides.SelectButton)
  )
  const StyledSelectButtonActive = styled.button(
    getOverrideCSSProperties(SelectButtonActiveTemplate, overrides.SelectButton)
  )

  return (
    <Fragment>
      {active && <StyledSelectButtonActive {...others}>{children}</StyledSelectButtonActive>}
      {!active && <StyledSelectButtonDeactivated {...others}>{children}</StyledSelectButtonDeactivated>}
    </Fragment>
  )
}

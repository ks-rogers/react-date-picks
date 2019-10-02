import React, { Dispatch, SetStateAction, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { YearMonthOption as MonthOption } from '../../atoms'
import moment from 'moment'

interface MonthOptionsProps extends HTMLAttributes<HTMLDivElement> {
  handleChange: (target: string) => void
  setPickerOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  overrides: ComponentOverrides
}

const MonthOptionsTemplate = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  textDecoration: 'none'
}

export const MonthOptions: React.FC<MonthOptionsProps> = props => {
  const { value, setPickerOpen, setMonthSelectOpen, handleChange, overrides } = props

  const StyledMonthOptions = styled.div(getOverrideCSSProperties(MonthOptionsTemplate, overrides.MonthOptions))

  const renderOptions = () => {
    let options = []
    for (let iM = 1; iM <= 12; iM += 1) {
      options.push(
        <MonthOption
          href=""
          key={`month-${iM.toString()}`}
          onClick={e => {
            e.preventDefault()
            handleChange(moment(value, 'YYYY-M-DD').format(`YYYY-${iM}`))
            setPickerOpen(false)
            setMonthSelectOpen(false)
          }}
          overrides={overrides}
        >
          {iM}
        </MonthOption>
      )
    }

    return options
  }

  return <StyledMonthOptions>{renderOptions()}</StyledMonthOptions>
}

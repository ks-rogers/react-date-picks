import React, { Dispatch, SetStateAction, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { YearMonthOption as MonthOption } from '../../atoms'
import dayjs from 'dayjs'

interface MonthOptionsProps extends HTMLAttributes<HTMLDivElement> {
  handleChange: (target: string) => void
  setYearMonthPickerOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  dateFormat: string
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
  const { value, setYearMonthPickerOpen, setMonthSelectOpen, handleChange, overrides, dateFormat } = props

  const StyledMonthOptions = styled.div(getOverrideCSSProperties(MonthOptionsTemplate, overrides.MonthOptions))

  const renderOptions = () => {
    const options = []
    for (let iM = 1; iM <= 12; iM += 1) {
      options.push(
        <MonthOption
          key={`month-${iM.toString()}`}
          onClick={e => {
            e.preventDefault()
            handleChange(
              dayjs(value)
                .set('month', iM - 1)
                .format(dateFormat)
            )
            setYearMonthPickerOpen(false)
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

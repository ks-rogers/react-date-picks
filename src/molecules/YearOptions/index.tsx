import React, { Dispatch, SetStateAction, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getOverrideCSSProperties, ComponentOverrides } from '../../helpers/overrides'
import { YearMonthOption as YearOption } from '../../atoms'
import dayjs from 'dayjs'

interface YearOptionsProps extends HTMLAttributes<HTMLDivElement> {
  handleChange: (target: string) => void
  setYearSelectOpen: Dispatch<SetStateAction<boolean>>
  setMonthSelectOpen: Dispatch<SetStateAction<boolean>>
  value: string
  dateFormat: string
  overrides: ComponentOverrides
}

const YearOptionsTemplate = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%'
}

export const YearOptions: React.FC<YearOptionsProps> = props => {
  const { value, setYearSelectOpen, setMonthSelectOpen, handleChange, overrides, dateFormat } = props

  const StyledYearOptions = styled.div(getOverrideCSSProperties(YearOptionsTemplate, overrides.YearOptions))

  const renderOptions = () => {
    const options = []
    for (let iY = 2019; iY > 2019 - 12; iY -= 1) {
      options.push(
        <YearOption
          key={`years-${iY.toString()}`}
          onClick={e => {
            e.preventDefault()
            handleChange(
              dayjs(value)
                .set('year', iY)
                .format(dateFormat)
            )
            setYearSelectOpen(false)
            setMonthSelectOpen(true)
          }}
          overrides={overrides}
        >
          {iY}
        </YearOption>
      )
    }

    return options
  }

  return <StyledYearOptions>{renderOptions()}</StyledYearOptions>
}

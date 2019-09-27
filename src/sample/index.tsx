import * as React from 'react'
import styled from 'styled-components'

const ChildSample = styled.p`
  color: red;
`

export const Sample = () => {
  return (
    <div>
      <p>sample components</p>
      <ChildSample>child sample component</ChildSample>
    </div>
  )
}

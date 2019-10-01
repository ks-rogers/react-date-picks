import * as React from 'react'

export type ConfigurationOverrideObjectT = {} | TemplateStringsArray

export type OverrideObjectT = {
  style?: ConfigurationOverrideObjectT
}

export type OverrideT = OverrideObjectT | React.ComponentType

export type OverridesT = {
  [key: string]: OverrideT
}

export const getOverrideCSSProperties = (
  originalProps: ConfigurationOverrideObjectT,
  overrideProps: OverridesT
): ConfigurationOverrideObjectT => {
  if (!overrideProps) {
    return originalProps
  }

  return {
    ...originalProps,
    ...overrideProps.style
  }
}

import * as React from 'react'

export type ConfigurationOverrideObjectT = {} | TemplateStringsArray

export type OverrideObjectT<T> = {
  style?: ConfigurationOverrideObjectT
}

export type OverrideT<T> = OverrideObjectT<T> | React.ComponentType<T>

export type OverridesT<T> = {
  [key: string]: OverrideT<T>
}

export const getOverrideCSSProperties = (
  originalProps: ConfigurationOverrideObjectT,
  overrideProps: ConfigurationOverrideObjectT
): ConfigurationOverrideObjectT => {
  return {
    ...originalProps,
    ...overrideProps
  }
}

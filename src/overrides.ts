import * as React from 'react'

type StyleOverride<T> = React.CSSProperties

interface OverrideObject<T> {
  style?: StyleOverride<T>
}

export type Override<T> = OverrideObject<T> | React.ComponentType<T>

export interface Overrides<T> {
  [key: string]: Override<T>
}

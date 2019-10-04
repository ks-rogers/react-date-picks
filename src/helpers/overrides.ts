export type ConfigurationOverrideObjectT = {} | TemplateStringsArray

export type OverrideT = {
  style?: TemplateStringsArray
}

export type OverridesT = {
  [key: string]: OverrideT
}

export interface ComponentOverrides {
  Root?: OverridesT
  YearMonthHeader?: OverridesT
  YearMonthBody?: OverridesT
  MonthOptions?: OverridesT
  YearMonthButton?: OverridesT
  YearOptions?: OverridesT
  DateField?: OverridesT
  Label?: OverridesT
  Divider?: OverridesT
  DateFieldLabeled?: OverridesT
  YearMonthOption?: OverridesT
  SelectButton?: OverridesT
  CalendarHeader?: OverridesT
  CalendarBody?: OverridesT
  WeekdayHeader?: OverridesT
  Weekday?: OverridesT
  Week?: OverridesT
  Day?: OverridesT
  PrevButton?: OverridesT
  NextButton?: OverridesT
  MonthSelectHeader?: OverridesT
  YearSelectHeader?: OverridesT
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

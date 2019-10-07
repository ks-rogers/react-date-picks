# react-date-picks
A date picker for your React app.

Pick days, months, years.
No moment.js used

## Screenshots


## Demo
(Online demo is available here)[#]

OR

```
yarn
yarn start
```

## Getting started

### Compatibility

You need to use React 16 or later in project.

### Installation

```
yarn add react-date-picks
```

### Usage

### Override styles

### basic use

```js
import Select from 'react-date-picks';

var c = (
  <Select />
);
React.render(c, container);
```

## API

### Props

| name     | type    | description     | default  |
|----------|-------|----------|--------------|
|yearMonthPicker | boolean |  - | false |
|handleChange | (target: string) => void | - | - |
|value | string | - | - |
|dateFormat | (optional) string | - | 'YYYY-MM-DDTHH:mm:ssZ' |
|placeholder | (optional) string | - | - |
|locale | (optional) string | - | 'en-ca' |
|overrides | (optional) string | - | {} |
|disabled | (optional) boolean | - | false |


### Methods

| name     | description    | parameters | return      |
|----------|----------------|----------|--------------|
|focus     | focus select programmably | - | - |
|blur     | blur select programmably | - | - |




## License

K.S.Rogers is released under the MIT license.

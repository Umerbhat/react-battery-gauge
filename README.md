# React Battery Gauge

This library is a SVG based react component for displaying battery status, ultra lightweight, highly customizable with zero dependencies
## Demo
![Battery Gauge Demo](demo/demo1.gif)
## Storybook Demo

[Click here](https://61c950606cc89f003a4379c2-jnjkdtdbkn.chromatic.com/?path=/story/gauge-battery--basic)

## Usage

Install it by running 
```bash
npm install react-battery-gauge # or yarn add react-battery-gauge
```
## Include the component:

```jsx
import BatteryGauge from 'react-battery-gauge'

<BatteryGauge value={40} />
```

## Options

| Name          | Description                                  | Default      | type                      |
|---------------|----------------------------------------------|--------------|---------------------------|
| value         | Meter value range [0-maxValue(100)]          | 50           | number                    |
| maxValue      | Meter max value                              | 100          | number                    |
| orientation   | Changes orientation, keeping text horizontal | "horizontal" | "horizontal"\| "vertical" |
| padding       | Padding of gauge within canvas               | 5            | number                    |
| animated      | Enable animation on mount                    | false        | boolean                   |
| customization | All individual components customization      | GaugeCustom  | Partial<TGaugeCustom>     |

## Override any customization default values:
```js
{
  batteryBody: {
    strokeWidth: 4,
    cornerRadius: 6,
    fill: 'none',
    strokeColor: '#111'
  },
  batteryCap: {
    fill: 'none',
    strokeWidth: 4,
    strokeColor: '#111',
    cornerRadius: 2,
    capToBodyRatio: 0.4
  },
  batteryMeter: {
    fill: 'green',
    lowBatteryValue: 15,
    lowBatteryFill: 'red',
    outerGap: 1,
    noOfCells: 1, // more than 1, will create cell battery
    interCellsGap: 1
  },
  readingText: {
    lightContrastColor: '#111',
    darkContrastColor: '#fff',
    lowBatteryColor: 'red',
    fontFamily: 'Helvetica',
    fontSize: 14,
    showPercentage: true
  }
}
```


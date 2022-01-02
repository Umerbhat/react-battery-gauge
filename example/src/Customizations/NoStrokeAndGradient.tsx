import React, { ReactElement } from 'react'
import BatteryGauge from '../../../dist'


export default function NoStrokeAndGradient() {
    return (
        <div>
        <h2>No Stroke and Gradient</h2>
        <BatteryGauge
          value={50}
          orientation="vertical"
          customization={{
            batteryBody: {
              fill: 'silver',
              strokeColor: 'silver',
              strokeWidth: 2,
            },
            batteryCap: {
              fill: 'silver',
              strokeColor: 'silver',
              cornerRadius: 3,
              strokeWidth: 0,
              capToBodyRatio: 0.4,
            },
            batteryMeter: {
              outerGap: 0,
              gradFill: [
                { color: 'red', offset: 0 },
                { color: 'orange', offset: 15 },
                { color: 'green', offset: 90 },
              ],
            },
            readingText: {
              lightContrastColor: 'purple',
              darkContrastColor: 'yellow',
              lowBatteryColor: 'red',
              fontFamily: 'Arial',
              fontSize: 12,
            },
          }}
        />
      </div>
    )
}

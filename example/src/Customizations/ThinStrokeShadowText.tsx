import React, { ReactElement } from 'react'
import BatteryGauge from '../../../dist'

export default function ThinStrokeShadowText() {
    return (
        <div>
        <h2>Thin Stroke & Shadow text </h2>
        <BatteryGauge
          value={50}
          orientation="vertical"
          customization={{
            batteryBody: {
              strokeColor: '#333',
              strokeWidth: 1,
              cornerRadius: 2,
            },
            batteryCap: {
              strokeColor: '#333',
              cornerRadius: 1,
              strokeWidth: 1,
              capToBodyRatio: 0.3,
            },
            batteryMeter: {
              outerGap: 1,
              noOfCells: 10,
            },
            readingText: {
              lowBatteryColor: 'red',
              fontSize: 16,
              style: { filter: 'url(#shadow)' },
            },
          }}
        >
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
            </filter>
          </defs>
        </BatteryGauge>
      </div>
    )
}

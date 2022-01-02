import React from 'react'
import BatteryGauge from '../../../dist'


export default function Cell() {
    return (
        <div>
        <h2>Cell Battery</h2>
        <BatteryGauge
          value={60}
          customization={{
            batteryMeter: {
              noOfCells: 10,
            },
            readingText: {
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

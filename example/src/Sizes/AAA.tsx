import React from 'react'
import BatteryGauge from '../../../dist'


export default function AAA() {
    return (
        <div>
             <h2>Size AAA</h2>
            <BatteryGauge value={80} aspectRatio={0.23} customization={{
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
              fontSize: 10,
              style: { filter: 'url(#shadow)' },
            },
          }}/>
        </div>
    )
}

import React = require('react');
import BatteryGauge from 'react-battery-gauge';

export default function C() {
  return (
    <div>
      <h2>Size C (default)</h2>
      <BatteryGauge
        value={80}
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
      />
    </div>
  );
}

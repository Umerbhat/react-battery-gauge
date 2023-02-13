import React = require('react');
import BatteryGauge from 'react-battery-gauge';

export default function AA() {
  return (
    <div>
      <h2>Size AA</h2>
      <BatteryGauge
        value={80}
        aspectRatio={0.28}
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
            fontSize: 10,
            style: { filter: 'url(#shadow)' },
          },
        }}
      />
    </div>
  );
}

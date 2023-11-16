import React = require('react');
import BatteryGauge from 'react-battery-gauge';

export default function ChargingCell() {
  return (
    <div>
      <h2>Charging Cell Battery</h2>
      <BatteryGauge
        value={60}
        charging=true
        chargingStartValue={40}
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
  );
}

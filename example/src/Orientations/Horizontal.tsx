import React = require('react');
import BatteryGauge from 'react-battery-gauge';

export default function Horizontal() {
  return (
    <div>
      <h2>Horizontal Battery</h2>
      <BatteryGauge value={40} />
    </div>
  );
}

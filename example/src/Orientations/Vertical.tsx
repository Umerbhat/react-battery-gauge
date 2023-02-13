import React = require('react');
import BatteryGauge from 'react-battery-gauge';

export default function Vertical() {
  return (
    <div>
      <h2>Vertical Battery</h2>
      <BatteryGauge value={40} orientation="vertical" />
    </div>
  );
}

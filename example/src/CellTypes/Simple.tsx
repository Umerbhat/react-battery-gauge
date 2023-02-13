import React = require('react');
import BatteryGauge from 'react-battery-gauge';

export default function Simple() {
  return (
    <div>
      <h2>Simple Battery</h2>
      <BatteryGauge value={30} />
    </div>
  );
}

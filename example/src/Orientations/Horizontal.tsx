import React, { ReactElement } from 'react'
import BatteryGauge from '../../../dist'


export default function Horizontal() {
    return (
        <div>
        <h2>Horizontal Battery</h2>
        <BatteryGauge value={40} />
      </div>)
}

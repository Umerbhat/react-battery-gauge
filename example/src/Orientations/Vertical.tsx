import React, { ReactElement } from 'react'
import BatteryGauge from '../../../dist'

export default function Vertical() {
    return (
        <div>
        <h2>Vertical Battery</h2>
        <BatteryGauge value={40} orientation="vertical" />
      </div>
    )
}

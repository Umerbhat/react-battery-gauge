import React, { ReactElement } from 'react'
import BatteryGauge from '../../../dist'

export default function Simple(){
    return (
        <div>
        <h2>Simple Battery</h2>
        <BatteryGauge value={30} />
      </div>
    )
}

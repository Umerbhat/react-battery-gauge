import React from 'react';
import * as ReactDOM from 'react-dom';
import { BatteryGauge } from '../src/index';

describe('Basic Battery Gauge', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BatteryGauge value={50}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

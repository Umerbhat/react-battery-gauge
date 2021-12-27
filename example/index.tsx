import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BatteryGauge } from '../.';

const App = () => {
  return (
    <div>
      <BatteryGauge value={50}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

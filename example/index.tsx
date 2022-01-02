import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Simple from './src/CellTypes/Simple';
import Cell from './src/CellTypes/Cell';
import Horizontal from './src/Orientations/Horizontal';
import Vertical from './src/Orientations/Vertical';
import ThinStrokeShadowText from './src/Customizations/ThinStrokeShadowText';
import NoStrokeAndGradient from './src/Customizations/NoStrokeAndGradient';
import AAAA from './src/Sizes/AAAA';
import AAA from './src/Sizes/AAA';
import AA from './src/Sizes/AA';
import C from './src/Sizes/C';
import D from './src/Sizes/D';
import Small from './src/Sizes/Small';
import Large from './src/Sizes/Large';

const App = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between"}}>
        <a href="https://github.com/umerbhat/react-battery-gauge">Github</a>
        <a href="https://www.npmjs.com/package/react-battery-gauge">NPM</a>
      </div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div style={{backgroundColor: '#ccc', padding: 10, borderRadius: 8}}>
          <code>npm i react-battery-gauge</code>
        </div>
        <div style={{backgroundColor: '#ccc', padding: 10, borderRadius: 8,}}>
          <code>yarn add react-battery-gauge</code>
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Cell Types</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
        <Simple />
        <Cell />
      </div>

      <h1 style={{ textAlign: 'center' }}>Battery Orientations</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
        <Horizontal />
        <Vertical />
      </div>
      <h1 style={{ textAlign: 'center' }}>Battery Customizations</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
        <ThinStrokeShadowText />
        <NoStrokeAndGradient />
      </div>
      <h1 style={{ textAlign: 'center' }}>Battery Sizes</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
        <AA />
        <AAA />
        <AAAA />
        <C />
        <D />
        <Small/>
        <Large/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

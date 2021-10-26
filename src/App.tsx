import React from 'react';
import { PastLaunches } from './features/launch/PastLaunches'
import { NextLaunch } from './features/launch/NextLaunch'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PastLaunches />
      <NextLaunch />
    </div>
  );
}

export default App;

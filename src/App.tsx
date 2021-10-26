import React from 'react';
import Stack from 'react-bootstrap/Stack'
import { PastLaunches } from './features/launch/PastLaunches'
import { NextLaunch } from './features/launch/NextLaunch'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
          <h1>SpaceX launches</h1>
      </header>
      <Stack direction="horizontal" gap={4}>
        <PastLaunches />
        <NextLaunch />
      </Stack>
    </div>
  );
}

export default App;

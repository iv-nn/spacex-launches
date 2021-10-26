import React from 'react';
import { useSelector } from 'react-redux'
import Stack from 'react-bootstrap/Stack'
import { RootState } from './app/store'
import { PastLaunches } from './features/launch/PastLaunches'
import { NextLaunch } from './features/launch/NextLaunch'
import { LaunchVideo } from './features/launch/LaunchVideo'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const selected = useSelector((state: RootState) => state.launch.selected)

  return (
    <div className="app">
      <header>
          <h1>SpaceX launches</h1>
      </header>

      {selected ? <LaunchVideo launch={selected} /> : null}

      <Stack direction="horizontal" gap={4}>
        <PastLaunches />
        <NextLaunch />
      </Stack>
    </div>
  );
}

export default App;

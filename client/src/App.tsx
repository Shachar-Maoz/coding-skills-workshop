import React from 'react';
import SortingHat from './components/SortingHat';
import './App.css';
import { Tardis } from './components/Tardis';
import SWC from './components/SWC';
import { Avengers } from './components/Avengers';

function App() {
  return (
    <div className="App">
      {/* <SortingHat /> */}
      {/* <Tardis/> */}
      {/* <SWC /> */}
      <Avengers />
    </div>
  );
}

export default App;

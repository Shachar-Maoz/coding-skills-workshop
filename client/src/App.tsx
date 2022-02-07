import React from 'react';
import SortingHat from './components/SortingHat';
import './App.css';
import { Tardis } from './components/Tardis';
import { Avengers } from './components/Avengers';

function App() {
  return (
    <div className="App">
      {/* <SortingHat /> */}
      {/* <Tardis/> */}
      <Avengers />
    </div>
  );
}

export default App;

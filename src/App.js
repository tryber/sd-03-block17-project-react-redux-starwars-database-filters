import React from 'react';
import './App.css';

import Table from './components/Table';
import NavBar from './components/NavBar';
import FilterPlanets from './components/FilterPlanets';

function App() {
  return (
    <div className="">
      <NavBar />
      <FilterPlanets />
      <Table />
    </div>
  );
}

export default App;

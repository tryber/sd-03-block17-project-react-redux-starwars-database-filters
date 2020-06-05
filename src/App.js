import React from 'react';
import './App.css';

import Table from './components/Table';
import NavBar from './components/NavBar';
import FilterPlanets from './components/FilterPlanets';
import RemoveFilters from './components/RemoveFilters';

function App() {
  return (
    <div className="">
      <NavBar />
      <FilterPlanets />
      <Table />
      <RemoveFilters />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <div>
      <h1>Star Wars Planets Information</h1>
      <FilterBar />
      <Table />
    </div>
  );
}

export default App;

import React from 'react';
import Table from './components/Table';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <div className="container">
      <FilterBar />
      <Table />
    </div>
  );
}

export default App;

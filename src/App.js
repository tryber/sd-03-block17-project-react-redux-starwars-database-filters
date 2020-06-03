import React from 'react';
import 'bootswatch/dist/pulse/bootstrap.min.css';
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

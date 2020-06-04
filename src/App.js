import React from 'react';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import FilterSelectors from './components/FilterSelectors';
import './App.css';

const App = () => (
  <div className="App">
    <InputFilter />
    <FilterSelectors />
    <Table />
  </div>
);

export default App;

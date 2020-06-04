import React from 'react';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import FilterSelectors from './components/FilterSelectors';
import SelectedFilters from './components/SelectedFilters';

import './App.css';

const App = () => (
  <div className="App">
    <InputFilter />
    <FilterSelectors />
    <SelectedFilters />
    <Table />
  </div>
);

export default App;

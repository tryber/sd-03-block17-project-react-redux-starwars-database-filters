import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1>StarWars Datatable with Filters</h1>
      </header>
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;

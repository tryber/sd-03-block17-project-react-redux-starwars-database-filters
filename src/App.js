import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1>Star Wars Planets Information</h1>
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;

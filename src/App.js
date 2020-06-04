import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;

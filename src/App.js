import React from 'react';
import './App.css';
import fetchh from './components/Fetchh';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table />
        <fetchh />
      </header>
    </div>
  );
}

export default App;

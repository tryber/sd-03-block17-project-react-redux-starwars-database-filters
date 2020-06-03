import React from 'react';
import './App.css';
import Body from './Body';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Projeto Bloco 17</h2>
      </header>
      <SearchBar />
      <Body />
    </div>
  );
}

export default App;
import React from 'react';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <InputFilter />
        <Table />
      </div>
    )
}

export default App;

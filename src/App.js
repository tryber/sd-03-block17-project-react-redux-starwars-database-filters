import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line import/no-named-as-default
import Table from './components/Table';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;

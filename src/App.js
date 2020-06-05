import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Filters />
        <Table />
      </div>
    );
  }
}
export default App;

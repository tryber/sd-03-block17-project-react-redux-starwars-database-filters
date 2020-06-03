import React from 'react';
import Table from './components/Table';
import FetchData from './components/FetchData';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FetchData />
        <Table />
      </div>
    );
  }
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css';
import deathstar from './deathstar.png';
import swlogo from './swlogo.png';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="images">
          <img src={deathstar} alt="logo" width="200px" />
          <img src={swlogo} alt="swlogo" width="200px" />
        </div>
        <Filters />
        <Table />
      </div>
    );
  }
}
export default App;

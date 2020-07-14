import React from 'react';
import Home from './components/Home';
import './App.css';
import fetchh from './components/Fetchh';
import Table from './components/Table';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

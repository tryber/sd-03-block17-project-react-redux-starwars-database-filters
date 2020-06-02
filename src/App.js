import { connect, Provider } from 'react-redux'
import React from 'react';
import Table from './components/Table'
import './App.css';


class App extends React.Component {
  render(){
    console.log('this.props:', this.props)
    return (
      <div className="App">
      <Table />
    </div>
  );
}
}

export default App;

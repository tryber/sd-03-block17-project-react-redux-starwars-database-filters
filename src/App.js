import React from 'react';
import './App.css';
import api from './service/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {dados:[]};
  }
  componentDidMount() {
    this.setState({...this.state,dados:api()})
  }
  render(){
    console.log(this.state.dados.results)
  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(this.state.dados.results)}
      </header>
    </div>
  );
  }
}

export default App;

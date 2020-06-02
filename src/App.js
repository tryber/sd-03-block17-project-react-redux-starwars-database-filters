import './App.css';
import React, { Component } from 'react';
import Table from './components/Table';
import { fetchData } from './action/index';
import {connect } from 'react-redux';


class App extends Component {
 
  constructor(props){
    super(props);
  }
  componentDidMount() {  
   async function fetch ( ) {
      await this.props.request();
   }

}



render() {
  return (
    <Table />
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  request: dispatch(fetchData()),
});

export default connect(null, mapDispatchToProps)(App);

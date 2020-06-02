import './App.css';
import React, { Component } from 'react';
import {connect } from 'react-redux';
import Table from './components/Table';
import { fetchData } from './action/index';

class App extends Component {

  componentDidMount() {
    async function fetch ( ) {
      const { request } = this.props;
      await request();
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

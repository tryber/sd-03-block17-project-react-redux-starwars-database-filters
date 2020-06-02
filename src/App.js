import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './components/Table';
import { fetchData } from './action/index';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl() {
    const { request } = this.props;
    request();
}

  render() {
    return (
      <Table />

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  request: (e) => dispatch(fetchData(e)),
});


export default connect(null, mapDispatchToProps)(App);

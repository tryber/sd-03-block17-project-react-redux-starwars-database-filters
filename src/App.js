import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchPlanets from './actions';
import Table from './components/Table';

class App extends Component {
  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  render() {
    return <div className="App"><Table /></div>;
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPlanets }, dispatch);

export default connect(null, mapDispatchToProps)(App);

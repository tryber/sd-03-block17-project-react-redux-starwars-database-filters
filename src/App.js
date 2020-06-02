import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import fetchPlanets from './actions';
import Table from './components/Table';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    return <div className="App"><Table /></div>;
  }
}

App.propTypes = {
  fetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetch: fetchPlanets }, dispatch);

export default connect(null, mapDispatchToProps)(App);

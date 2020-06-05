import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import { fetchPlanets } from './actions';
import Filters from './components/Filters';

class App extends Component {
  componentDidMount() {
    const { fetchPlanetList } = this.props;
    fetchPlanetList();
  }
  render() {
    return (
      <div className="App">
        <Filters />
        <Table />
      </div>
    );
  }
}

App.propTypes = {
  fetchPlanetList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetList: () => dispatch(fetchPlanets()),
});

export default connect(null, mapDispatchToProps)(App);

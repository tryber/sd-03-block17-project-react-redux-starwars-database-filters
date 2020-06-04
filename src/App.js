import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import planetsFetch from './actions/planetsFetch';
import Filters from './components/Filters';
import './App.css';
import Table from './components/Table';

class App extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
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
  fetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetch: planetsFetch }, dispatch);

export default connect(null, mapDispatchToProps)(App);

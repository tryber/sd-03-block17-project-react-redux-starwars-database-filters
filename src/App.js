import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from './components/Table';
import FetchData from './components/FetchData';
import SearchBox from './components/SearchBox';

import './App.css';

const App = ({ loading }) => {
  if (loading) return <FetchData />;
  return (
    <div className="App">
      <SearchBox />
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.isFetching,
});

App.propTypes = { loading: PropTypes.bool.isRequired };

export default connect(mapStateToProps)(App);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from './components/Table';
import FetchData from './components/FetchData';
import SearchBox from './components/SearchBox';

import './App.css';

const App = ({ planets, loading }) => {
  if (loading) return <FetchData />;
  return (
    <div className="App">
      <SearchBox />
      <Table planets={planets} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.isFetching,
  planets: state.data,
});

App.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(App);

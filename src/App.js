import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import Header from './components/Header';
import FetchData from './components/FetchData';
import './App.css';

const App = ({ loading }) => (
  <div className="App">
    <Header />
    {loading ? <FetchData /> : <Home />}
  </div>
);

App.propTypes = { loading: PropTypes.bool.isRequired };

const mapStateToProps = (state) => ({
  loading: state.planetsInfoReducer.loading,
});

export default connect(mapStateToProps)(App);

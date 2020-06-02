import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './components/Table';
import PropTypes from 'prop-types';
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


App.propTypes = {
  request: PropTypes.func,
};

App.defaultProps = {
  request: PropTypes.func,
 };
export default connect(null, mapDispatchToProps)(App);

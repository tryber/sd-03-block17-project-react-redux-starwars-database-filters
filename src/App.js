import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './components/Table';
import { fetchData } from './action/index';
import InputFilter from './components/InputFilter';
import FilterNumeric from './components/FilterNumeric';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <InputFilter />
        <FilterNumeric />
        <Table />
      </div>

    );
  }
}


export default connect(null, null)(App);

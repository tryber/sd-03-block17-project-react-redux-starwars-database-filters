import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { filterByName } from '../actions/filters';
import FilterByName from './FilterByName';
import FilterByNumberValues from './FilterByNumberValues';
import OrderColumns from './OrderColumns';

const SearchBar = () => (
  <div>
    <FilterByName />
    <FilterByNumberValues />
    <OrderColumns />
  </div>
);

// const mapDispatchToProps = (dispatch) => ({
//   filterByName: (value) => dispatch(filterByName(value)),
// })

export default SearchBar;

// SearchByName.propTypes = {
//   filterPlanetsByName: PropTypes.func,
// };

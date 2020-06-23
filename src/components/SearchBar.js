import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { filterByName } from '../actions/filters';
import SearchByName from './SearchByName';

const SearchBar = () => (
  <div>
    <SearchByName />
  </div>
);

// const mapDispatchToProps = (dispatch) => ({
//   filterByName: (value) => dispatch(filterByName(value)),
// })

export default SearchBar;

// SearchByName.propTypes = {
//   filterPlanetsByName: PropTypes.func,
// };

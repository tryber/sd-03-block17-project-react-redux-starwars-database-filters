import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions/filters';

const FilterByName = ({ filterByPlanetName }) => (
  <input
    type="text"
    data-testid="name-filter"
    onChange={(event) => filterByPlanetName(event.target.value)}
    placeholder="Seach by Planet Name"
  />
);

const mapDispatchToProps = (dispatch) => ({
  filterByPlanetName: (value) => dispatch(filterByName(value)),
});

export default connect(null, mapDispatchToProps)(FilterByName);

FilterByName.propTypes = {
  filterByPlanetName: PropTypes.func.isRequired,
};

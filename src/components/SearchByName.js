import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchByName = ({ filterByName }) => (
  <input
    type="text"
    data-testid="name-filter"
    onChange={(event) => filterByName(event.target.value.toLocaleLowerCase())}
    placeholder="Seach by Planet Name"
  />
);

const mapDispatchToProps = (dispatch) => ({
  filterByName: (value) => dispatch(filterByName(value)),
});

export default connect(null, mapDispatchToProps)(SearchByName);

SearchByName.propTypes = {
  filterPlanetsByName: PropTypes.func,
};

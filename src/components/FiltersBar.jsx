import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';
import NumFilter from './NumFilter';

const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const FilterBar = ({ numFilters }) => (
  <section>
    <section>
      <SearchBox />
    </section>
    <section>
      {numFilters.map((filterValues, id) => (
        <NumFilter
          filterValues={filterValues}
          id={id}
          key={id}
          columnOptions={columnOptions}
        />
      ))}
  </section>
  </section>
);

const mapStateToProps = ({ filters: { inProgresNumericFilter } }) => ({
  numFilters: inProgresNumericFilter,
});

FilterBar.propTypes = {
  numFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
      comparison: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(mapStateToProps)(FilterBar);

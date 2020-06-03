import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';
import NumFilter from './NumFilter';

const columnOptions = ['orbital_period', 'diameter', 'rotation_period', 'surface_water'];

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
          columnOptions={columnOptions}
        />
      ))}
  </section>
  </section>
);

const mapStateToProps = ({ filters: { filterByNumericValues } }) => ({
  numFilters: filterByNumericValues,
});

FilterBar.propTypes = {
  numFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
      comparison: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(mapStateToProps)(FilterBar);

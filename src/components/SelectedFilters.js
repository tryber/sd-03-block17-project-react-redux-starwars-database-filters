import React from 'react';
import { connect } from 'react-redux';
import { excludeFilterAction } from '../actions/cancelFilter';


const SelectedFilters = ({ selectedFilters, removeFilter }) => selectedFilters.map((
  { column, comparison, value },
) => (
  <div key={column} data-testid="filter">
    {`${column} ${comparison} ${value}`}
    <button type="button" onClick={() => removeFilter(column)}>X</button>
  </div>
));

const mapStateToProps = (state) => ({
  selectedFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (column) => dispatch(excludeFilterAction(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);

import React from 'react';
import { connect } from 'react-redux';
import { excludeFilterAction } from '../actions/cancelFilter';


const removeFilterElement = (e, column, removeFilter) => {
  e.target.remove();
  removeFilter(column);
};

const SelectedFilters = ({ selectedFilters, removeFilter }) => selectedFilters.map((
  { column, comparison, value },
) => (
  <p data-testid="filter">
    {`${column} ${comparison} ${value}`}
    <button type="button" onClick={(e) => removeFilterElement(e, column, removeFilter)}>X</button>
  </p>
));

const mapStateToProps = (state) => ({
  selectedFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (column) => dispatch(excludeFilterAction(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);

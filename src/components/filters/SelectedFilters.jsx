import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilters } from '../../actions/actionsCreators';

const SelectedFilters = ({ removeFilter, filters }) => {
  const initialFilters = filters.filter((filter) => filter.column !== '');
  return (
    <div>
      <h3>Filtros Ativos</h3>
      {initialFilters
        && initialFilters.map((filter) => (
          <p key={filter.column} data-testid="filter">
            <span>{filter.column}</span>
            <span>{filter.comparison}</span>
            <span>{filter.value}</span>
            <button type="button" onClick={() => removeFilter(filter)}>
              X
            </button>
          </p>
        ))}
    </div>
  );
};

SelectedFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  removeFilter: PropTypes.func.isRequired,
};

SelectedFilters.defaultProps = { filters: [] };

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (filter) => dispatch(removeFilters(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);

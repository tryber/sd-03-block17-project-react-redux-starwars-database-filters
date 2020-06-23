import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilters } from '../actions/filters';

const RemoveFilters = ({ removeFilters, filters }) => {
  const initialState = filters.filter((filter) => filter.column !== '');
  return (
    <div>
      <h3>Selecionados</h3>
      {initialState
        && initialState.map((filter) => (
          <p key={filter.column} data-testid="filter">
            <span>{filter.column}</span>
            <span>{filter.comparison}</span>
            <span>{filter.value}</span>
            <button type="button" onClick={() => removeFilters(filter)}>
              X
            </button>
          </p>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilters: (filters) => dispatch(removeFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);

RemoveFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  removeFilter: PropTypes.func.isRequired,
};

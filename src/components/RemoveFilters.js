import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilters } from '../actions/filters';

const RemoveFilters = ({ filters, removeSelectedFilters }) => {
  if (filters.lenght !== 0) {
    return (
      <div>
        <h3>Filtros Selecionados</h3>
        {filters.map((filter) => (
            <p key={filter.column} data-testid="filter">
              <span>{filter.column}</span>
              <span>{filter.comparison}</span>
              <span>{filter.value}</span>
              <button type="button" onClick={() => removeSelectedFilters(filter)}>
                X
              </button>
            </p>
          ))}
      </div>
    );
  }
  return <p>Nenhum filtro selecionado</p>
};

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeSelectedFilters: (filters) => dispatch(removeFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);

RemoveFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeSelectedFilter: PropTypes.func.isRequired,
};

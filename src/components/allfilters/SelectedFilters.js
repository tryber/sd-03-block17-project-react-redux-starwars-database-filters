import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilters } from '../../actions';

class SelectedFilters extends Component {
  constructor(props) {
    super(props);

    this.displayFilter = this.displayFilter.bind(this);
  }

  displayFilter(value) {
    const { removeFilter } = this.props;
    return (
      <p key={value.column} data-testid="filter">
        <span>{value.column}</span>
        <span>{value.comparison}</span>
        <span>{value.value}</span>
        <button type="button" onClick={() => removeFilter(value)}>
          X
        </button>
      </p>
    );
  }

  render() {
    const { filters } = this.props;
    const initialFilters = filters.filter((filter) => filter.column !== '');
    return (
      <div>
        <h3>Filtros Ativos</h3>
        {initialFilters
          && initialFilters.map((filter) => this.displayFilter(filter))}
      </div>
    );
  }
}

SelectedFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  removeFilter: PropTypes.func.isRequired,
};

SelectedFilters.defaultProps = { filters: [] };

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (value) => dispatch(removeFilters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);

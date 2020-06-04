import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../../actions';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

const filterColumnsOptions = (filters, value) => !filters.find(({ column }) => column === value);

class FilterByValuesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  renderColumnFilter() {
    const { valueFilters } = this.props;
    return (
      <select
        id="column-filter"
        data-testid="column-filter"
        onChange={(event) => this.setState({ column: event.target.value })}
      >
        <option value="" />
        {columns.map((column) => (filterColumnsOptions(valueFilters, column)
          && (
          <option value={column} key={column}>
            {column}
          </option>
          )
        ))}
      </select>
    );
  }

  renderComparisonFilter() {
    return (
      <select
        name="comparison-filter"
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={(event) => this.setState({ comparison: event.target.value })}
      >
        <option value="" />
        {comparisons.map((comparison) => (
          <option value={comparison} key={comparison}>
            {comparison}
          </option>
        ))}
      </select>
    );
  }

  renderValueFilter() {
    return (
      <input
        type="number"
        name="value-filter"
        id="value-filter"
        data-testid="value-filter"
        placeholder="digite um valor"
        onChange={(event) => this.setState({ value: event.target.value })}
      />
    );
  }

  renderSubmitFiltersButton() {
    const { column, comparison, value } = this.state;
    const { filtersParams } = this.props;
    return (
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => filtersParams({ column, comparison, value })}
      >
        Filtrar
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.renderColumnFilter()}
        {this.renderComparisonFilter()}
        {this.renderValueFilter()}
        {this.renderSubmitFiltersButton()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filtersParams: (filtersParams) => dispatch(filterByNumericValues(filtersParams)),
});

const mapStateToProps = (state) => ({
  valueFilters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByValuesInput);

FilterByValuesInput.propTypes = {
  filtersParams: PropTypes.func.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

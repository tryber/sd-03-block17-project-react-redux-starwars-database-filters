import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../../actions/actionsCreators';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

const filterColumnsOptions = (filters, value) => !filters.find(({ column }) => column === value);

class FilterByValuesBar extends Component {
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
    const { column: columnValue } = this.state;
    return (
      <select
        id="column-filter"
        data-testid="column-filter"
        value={columnValue}
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
    const { comparison: comparisonValue } = this.state;
    return (
      <select
        name="comparison-filter"
        id="comparison-filter"
        value={comparisonValue}
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
    const { value: valueState } = this.state;
    return (
      <input
        type="number"
        name="value-filter"
        id="value-filter"
        value={valueState}
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
        onClick={() => (filtersParams({ column, comparison, value }, this.setState({ column: '', comparison: '', value: '' })))}
        disabled={column === '' || comparison === '' || value === ''}
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

FilterByValuesBar.propTypes = {
  filtersParams: PropTypes.func.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  valueFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filtersParams: (filtersParams) => dispatch(filterByNumericValues(filtersParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByValuesBar);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValue } from '../actions/filters';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = [
  'maior que',
  'menor que',
  'igual a'
];

const columnFilter = (filters, value) => !filters/*.find(({ column }) => column === value);*/

class filterByNumberValues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    }
  }

  renderColumnFilter() {
    const { numericFilterValue} = this.props;
    const { column: columnValue } = this.state;
    return (
      <select
        data-testid="column-filter"
        value={columnValue}
        onChange={(event) => this.setState({ column: event.target.value })}
      >
        <option value="" />
        {columns.map((column) => (columnFilter(numericFilterValue, column)
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
        value={valueState}
        data-testid="value-filter"
        placeholder="digite um valor"
        onChange={(event) => this.setState({ value: event.target.value })}
      />
    );
  }

  renderSubmitFiltersButton() {
    const { column, comparison, value } = this.state;
    const { numericFilterParameters } = this.props;
    return (
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => (numericFilterParameters({ column, comparison, value }, this.setState({ column: '', comparison: '', value: '' })))}
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

const mapDispatchToProps = (dispatch) => ({
  numericFilterParameters: (parameters) => dispatch(filterByNumericValue(parameters)),
})

const mapStateToProps = (state) => ({
  numericFilterValue: state.filters.filterByNumericValue,
})

export default connect(mapStateToProps, mapDispatchToProps)(filterByNumberValues);

filterByNumberValues.propTypes = {
  numericFilterParameters: PropTypes.func.isRequired,
  numericFilterValue: PropTypes.arrayOf(PropTypes.object).isRequired,
};

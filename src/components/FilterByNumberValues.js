import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValue } from '../actions/filters';

const columns = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const comparison = ['', 'maior que', 'igual a', 'menor que'];
const columnFilter = (filters, value) => !filters.find(({ column }) => column === value);

class filterByNumberValues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleClick() {
    const searchFilters = {
      column: this.state.column,
      comparison: this.state.comparison,
      value: this.state.value,
    };
    this.props.numericFilterParameters(searchFilters);
  }

  render() {
    const { numericFilterValue } = this.props;
    return (
      <div className="filters-div">
        <select data-testid="column-filter" onChange={(event) => this.handleChange(event, 'column')}>
          {columns.map((column) => (columnFilter(numericFilterValue, column) &&
            (<option value={column} key={column}>{column}</option>)
          ))}
        </select>
        <select onChange={(event) => this.handleChange(event, 'comparison')} data-testid="comparison-filter">
          {comparison.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <input type="number" data-testid=" value-filter" onChange={(event) => this.handleChange(event, 'value')} />
        <button
          data-testid="button-filter"
          onClick={this.handleClick}
          disabled={!this.state.column}
        >
          Filter
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  numericFilterParameters: (parameters) => dispatch(filterByNumericValue(parameters)),
});

const mapStateToProps = (state) => ({
  numericFilterValue: state.filters.filterByNumericValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(filterByNumberValues);

filterByNumberValues.propTypes = {
  numericFilterParameters: PropTypes.func.isRequired,
  numericFilterValue: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanetsByNumericValues } from '../actions';
import NameFilter from './NameFilter';
import FilterList from './FilterList';

const filterColumnsOptions = (filters, value) => !filters.find(({ column }) => column === value);

class SearchBar extends Component {
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
    this.props.filtersParams(searchFilters);
  }

  render() {
    const columns = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const comparison = ['', 'maior que', 'igual a', 'menor que'];
    const { valueFilters } = this.props;
    return (
      <div className="filters-div">
        <NameFilter />
        <select
          id="column-filter"
          data-testid="column-filter"
          onChange={(event) => this.handleChange(event, 'column')}
        >
          {columns.map((column) => (filterColumnsOptions(valueFilters, column) &&
            (<option value={column} key={column}>{column}</option>)
          ))}
        </select>
        <select
          onChange={(event) => this.handleChange(event, 'comparison')}
          data-testid="comparison-filter"
        >
          {comparison.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(event) => this.handleChange(event, 'value')}
        />
        <button data-testid="button-filter" onClick={this.handleClick}>Filter</button>
        <FilterList />
      </div>
    );
  }
}

SearchBar.propTypes = {
  filtersParams: PropTypes.func.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  valueFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filtersParams: (filtersParams) => dispatch(filterPlanetsByNumericValues(filtersParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

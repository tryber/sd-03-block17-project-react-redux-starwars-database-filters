import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanetsByNumericValues } from '../actions';
import NameFilter from './ColumnFilter';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
      columnOptions: ['', 'population', 'orbital_period',  'diameter', 'rotation_period', 'surface_water'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
    // this.selectedColumns = this.selectedColumns.bind(this);
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
    this.props.filterPlanetsByNumericValues(searchFilters);
    this.filterOptions();
  }

  /* selectedColumns() {
    const { numericFilters } = this.props;
    return numericFilters.reduce((acc, filter) => {
      acc.push(filter.column);
      return acc;
    }, [])
  } */

  filterOptions() {
    /* const previousSelected = this.selectedColumns();
    const newColumns = this.state.columnOptions
    if (previousSelected.length !== 0) {
      return previousSelected.reduce((newList, column) =>
        newList.filter((option) => {
          if (option !== column) return option;
        })
      , newColumns);
    } */
    const newColumns = this.state.columnOptions.reduce((acc, option) => {
      if (option !== this.state.column) {
        acc.push(option);
      }
      return acc;
    }, []);
    this.setState({
      column: '',
      comparison: '',
      value: '',
      columnOptions: newColumns,
    });
  }

  render() {
    return (
      <div>
        <NameFilter />
        <div>
          <label htmlFor="filter">Filter By Numeric Value:</label>
          <select
            value={this.state.column}
            id="filter"
            onChange={(event) => this.handleChange(event, 'column')}
            data-testid="column-filter"
          >
            {this.state.columnOptions.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
          <select
            value={this.state.comparison}
            onChange={(event) => this.handleChange(event, 'comparison')}
            data-testid="comparison-filter"
          >
            <option value="" />
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input value={this.state.value} type="number" data-testid="value-filter" onChange={(event) => this.handleChange(event, 'value')} />
          <button
            data-testid="button-filter"
            onClick={this.handleClick}
          >Filter</button>
        </div>
      </div>
    );
  }
}

/* const mapStateToProps = (state) => ({
  numericFilters: state.filters.filterByNumericValues,
}); */

const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByNumericValues: (estado) => dispatch(filterPlanetsByNumericValues(estado)),
});

SearchBar.propTypes = {
  filterPlanetsByNumericValues: PropTypes.func,
  // numericFilters: PropTypes.arrayOf(PropTypes.object),
};

SearchBar.defaultProps = {
  filterPlanetsByNumericValues: null,
  // numericFilters: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

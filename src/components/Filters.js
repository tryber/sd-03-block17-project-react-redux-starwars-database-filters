import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetsByName, addFilter } from '../actions/FilterActions';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const dropdownFilter = (filters, value) => !filters.find(({ column }) => column === value);

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleInputChange(e) {
    const { filterPlanetsByName: filter } = this.props;
    filter(e.target.value);
  }

  handleFilters() {
    const { addFilter: filter } = this.props;
    const Column = document.getElementById('column-filter').value;
    const comparison = document.getElementById('comparison-filter').value;
    const valueFilter = document.getElementById('value-filter').value;
    filter(Column, comparison, valueFilter);
  }

  renderNameFilter() {
    return (
      <input
        id="name-filter"
        className="name-filter"
        data-testid="name-filter"
        type="text"
        placeholder="Planet name"
        onChange={this.handleInputChange}
      />
    );
  }

  renderColumnFilter() {
    const { storedFilters } = this.props;
    return (
      <select
        id="column-filter"
        className="dropdown"
        data-testid="column-filter"
      >
        <option value="" />
        {columns.map((column) => (dropdownFilter(storedFilters, column)
          && (
          <option value={column} key={column}>
            {column}
          </option>
          )
        ))}
      </select>
    );
  }

  static renderComparisonFilter() {
    return (
      <select
        id="comparison-filter"
        className="dropdown"
        data-testid="comparison-filter"
      >
        <option />
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    );
  }

  static renderValueFilter() {
    return (
      <input
        id="value-filter"
        className="value-filter"
        data-testid="value-filter"
        type="number"
      />
    );
  }

  renderFilterButton() {
    return (
      <button
        data-testid="button-filter"
        onClick={this.handleFilters}
        className="filter-button"
        type="button"
      >
        Filtrar
      </button>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderNameFilter()}
        </div>
        {this.renderColumnFilter()}
        {Filters.renderComparisonFilter()}
        {Filters.renderValueFilter()}
        {this.renderFilterButton()}
      </div>
    );
  }
}

Filters.propTypes = {
  filterPlanetsByName: propTypes.func.isRequired,
  addFilter: propTypes.func.isRequired,
  storedFilters: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStatetoProps = (state) => ({
  storedFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByName: (name) => dispatch(filterPlanetsByName(name)),
  addFilter: (column, comparison, value) => dispatch(
    addFilter(column, comparison, value),
  ),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Filters);

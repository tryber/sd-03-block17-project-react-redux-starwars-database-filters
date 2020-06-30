import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterName, filterNumValues, deleteFilter } from '../actions';
import filters from '../reducers/filters';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
      filters: ["population", "orbital_period", "diameter", "rotation_period", "surface_water"],
    };

    this.disableOption = this.disableOption.bind(this);
    this.enableOption = this.enableOption.bind(this);
  }

  selectAnOption() {
    const { column, filters } = this.state;
    return (
      <select
        data-testid="column-filter"
        value={column}
        onChange={(event) => this.setState({ column: event.target.value })}
      >
        <option value="" />
        {filters.map((filter) => <option value={filter} key={filter}>{filter}</option>)}
      </select>
    );
  }

  selectACondition() {
    const { comparison } = this.state;
    return (
      <select
        data-testid="comparison-filter"
        value={comparison}
        onChange={(event) => this.setState({ comparison: event.target.value })}
      >
        <option value="" />
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    );
  }

  inputNumber() {
    return (
      <input
        data-testid="value-filter"
        type="number"
        placeholder="Digit a number"
        onChange={(event) => this.setState({ value: event.target.value })}
      />
    );
  }

  disableOption(column) {
    const { filters } = this.state;
    const response = filters;
    response.splice(response.findIndex((filter) => filter === column), 1);
    this.setState({ filters: response });
  }

  enableOption(column, index) {
    const { deleteFil, filterByNumeric } = this.props;
    const { filters } = this.state;

    const response = filters;
    response.push(column);
    this.setState({ filters: response });

    const response2 = filterByNumeric;
    response2.splice(index, 1);
    deleteFil(response2);
  }

  render() {
    const { getFilterByName, getFilterByNumber, filterByNumeric } = this.props;
    const { column, comparison, value } = this.state;

    return (
      <div>
        <h3>Filter results</h3>
        <input
          data-testid="name-filter" type="text" placeholder="Digit a planet name"
          onChange={(event) => getFilterByName(event.target.value)}
        />
        <p>Select an option:</p>
        {this.selectAnOption()}
        <p>Select a condition:</p>
        {this.selectACondition()}
        {this.inputNumber()}
        <button
          data-testid="button-filter"
          type="button"
          onClick={() => {
            getFilterByNumber({ column, comparison, value })
            this.disableOption(column)
          }}
        >
          Filtrar
        </button>
        {filterByNumeric.map((filter, index) => (
          <div>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              data-testid="filter"
              type="button"
              onClick={() => this.enableOption(filter.column, index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumeric: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getFilterByName: (name) => dispatch(filterName(name)),
  getFilterByNumber: (getFilterByNumber) => dispatch(filterNumValues(getFilterByNumber)),
  deleteFil: (filters) => dispatch(deleteFilter(filters)),
});

Filters.propTypes = {
  getFilterByName: PropTypes.func.isRequired,
  getFilterByNumber: PropTypes.func.isRequired,
};

// Filters.defaultProps = {
//   getFilterByName: null,
//   getFilterByNumber: null,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterName, filterNumValues } from '../actions';

class Filters extends Component {
  render() {
    const { getFilterByName, getFilterByNumber } = this.props;

    return (
      <div>
        <h3>Filter results</h3>
        <input
          data-testid="name-filter" type="text" placeholder="Digit a planet name"
          onChange={(event) => getFilterByName(event.target.value)}
        />
        <p>Select an option:</p>
        <select data-testid="column-filterTrybe" onChange={this.handleChange}>
          <option value="select">Select</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <p>Select a condition:</p>
        <select data-testid="comparison-filter" onChange={this.handleChange}>
          <option value="select">Select</option>
          <option value="maior_que">Maior que</option>
          <option value="menor_que">Menor que</option>
          <option value="igual_a">Igual a</option>
        </select>
        <input
          data-testid="value-filter" type="number" placeholder="Digit a number"
          onChange={(event) => getFilterByNumber(event.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
  column: state.filters.filterByNumericValues.column,
  comparison: state.filters.filterByNumericValues.comparison,
  value: state.filters.filterByNumericValues.value,
});

const mapDispatchToProps = (dispatch) => ({
  getFilterByName: (name) => dispatch(filterName(name)),
  getFilterByNumber: (column, comparison, value) => dispatch(filterNumValues(column, comparison, value)),
});

Filters.propTypes = {
  getFilterByName: PropTypes.func,
  getFilterByNumber: PropTypes.func,
};

Filters.defaultProps = {
  getFilterByName: null,
  getFilterByNumber: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortColumns } from '../actions/filters';

const columns = [
  'Name',
  'Climate',
  'Created',
  'Diameter',
  'Edited',
  'Films',
  'Gravity',
  'Orbital_period',
  'Population',
  'Rotation_period',
  'Surface_water',
  'Terrain',
  'URL',
];

class OrderColumns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: 'Name',
      order: 'ASC',
    };
  }

  columnSelect() {
    return (
      <select
        data-testid="column-sort"
        onChange={(event) => this.setState({ column: event.target.value })}
      >
        {columns.map((column) => (
          <option value={column.toLowerCase()} key={column}>
            {column}
          </option>
        ))}
      </select>
    );
  }

  sortSelect() {
    return (
      <div>
        <label htmlFor="ASC">
          ASC
          <input
            name="sort_radio"
            type="radio"
            data-testid="column-sort-input"
            value="ASC"
            defaultChecked
            onChange={(event) => this.setState({ order: event.target.value })}
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            name="sort_radio"
            type="radio"
            data-testid="column-sort-input"
            value="DESC"
            onChange={(event) => this.setState({ order: event.target.value })}
          />
        </label>
      </div>
    );
  }

  submitButton() {
    const { column, order } = this.state;
    const { sortParams } = this.props;
    return (
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => sortParams({ column, order })}
      >
        Ordenar
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.columnSelect()}
        {this.sortSelect()}
        {this.submitButton()}
      </div>
    );
  }
}

OrderColumns.propTypes = {
  sortParams: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sortParams: (sortParams) => dispatch(sortColumns(sortParams)),
});

export default connect(null, mapDispatchToProps)(OrderColumns);

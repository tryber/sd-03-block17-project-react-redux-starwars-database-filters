import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortColumns } from '../../actions/actionsCreators';

const columns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

class SortColumnsFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      order: '',
    };
  }

  renderColumnSelect() {
    return (
      <select
        data-testid="column-sort"
        onChange={(event) => this.setState({ column: event.target.value })}
      >
        <option value="" />
        {columns.map((column) => (
          <option value={column} key={column}>
            {column}
          </option>
        ))}
      </select>
    );
  }

  renderSortSelect() {
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

  renderSubmitButton() {
    const { column, order } = this.state;
    const { sortParams } = this.props;
    return (
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => sortParams({ column, order })}
        disabled={column === ''}
      >
        Ordenar
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.renderColumnSelect()}
        {this.renderSortSelect()}
        {this.renderSubmitButton()}
      </div>
    );
  }
}

SortColumnsFilter.propTypes = {
  sortParams: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sortParams: (sortParams) => dispatch(sortColumns(sortParams)),
});

export default connect(null, mapDispatchToProps)(SortColumnsFilter);

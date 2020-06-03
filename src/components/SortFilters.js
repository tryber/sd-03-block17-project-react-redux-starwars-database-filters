import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import actionSortFilter from '../store/actions/actionSortFilter';

export class SortFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        column: '',
        sort: '',
      },
      options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    };
  }

  handleOrder(e) {
    const { name, value } = e.target;
    this.setState((state) => ({ order: { ...state.order, [name]: value } }));
  }

  handleSubmitOrder() {
    const { order } = this.state;
    const { sortFilter } = this.props;
    if (order.column === '' || order.sort === '') return false;
    sortFilter(order);
    return true;
  }

  renderSortFilter() {
    const { options } = this.state;
    return (
      <div>
        <select
          data-testid="column-sort"
          name="column"
          onChange={(e) => this.handleOrder(e)}
        >
          <option value="" />
          {options.map((column) => <option value={column} key={column}>{column}</option>)}
        </select>
        {this.renderSortButtons()}
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={() => this.handleSubmitOrder()}
        >
          Ordenar
        </button>
      </div>

    );
  }

  renderSortButtons() {
    return (
      <div>
        <input
          type="radio"
          name="sort"
          value="ASC"
          id="ASC"
          data-testid="column-sort-input"
          onChange={(e) => this.handleOrder(e)}
        />
        <label htmlFor="ASC">Crescente</label>
        <input
          type="radio"
          name="sort"
          value="DESC"
          id="DESC"
          data-testid="column-sort-input"
          onChange={(e) => this.handleOrder(e)}
        />
        <label htmlFor="DESC">Decrescente</label>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSortFilter()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    sortFilter: actionSortFilter,
  }, dispatch,
);

SortFilters.propTypes = {
  sortFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SortFilters);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import actionFilterNames from '../store/actions/actionFilterNames';
import actionAddFilterValues from '../store/actions/actionAddFilterValues';
import actionRemoveFilterValues from '../store/actions/actionRemoveFilterValues';
import actionSortFilter from '../store/actions/actionSortFilter';
import './Filters.css';

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
      order: {
        column: '',
        sort: '',
      },
      options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
      sortOptions: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const {
      column, comparison, value, options,
    } = this.state;
    const { addFilter } = this.props;
    if (value === '') return false;
    addFilter(column, comparison, value);
    const newOptions = options.filter((option) => option !== column);
    this.setState({
      column: '',
      comparison: '',
      value: '',
      options: [...newOptions],
    });
    return true;
  }

  handleRemove(index, column) {
    const { removeFilter } = this.props;
    const { options } = this.state;
    removeFilter(index);
    this.setState({ options: [...options, column] });
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
    this.setState(() => ({ order: { column: '', sort: '' } }));
    return true;
  }

  renderInputName() {
    const { filterNames } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => filterNames(e.target.value)}
        />
      </div>
    );
  }

  renderOptionsFilter() {
    const { options } = this.state;
    return (
      <div>
        <select data-testid="column-filter" name="column" onChange={(e) => this.handleChange(e)}>
          <option value="" />
          {options.map((column) => <option value={column} key={column}>{column}</option>)}
        </select>
      </div>
    );
  }

  renderComparisonFilter() {
    return (
      <div>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={(e) => this.handleChange(e)}
        >
          <option value="" />
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
    );
  }

  renderValueFilter() {
    const { value } = this.state;
    return (
      <div>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={(e) => this.handleChange(e)}
          value={value}
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => this.handleSubmit()}
      >
        Adicionar Filtro
      </button>
    );
  }

  renderSortFilter() {
    const { sortOptions } = this.state;
    return (
      <div>
        <select
          data-testid="column-sort"
          name="column"
          onChange={(e) => this.handleOrder(e)}
        >
          <option value="" />
          {sortOptions.map((column) => <option value={column} key={column}>{column}</option>)}
        </select>
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
        <button type="button" onClick={() => this.handleSubmitOrder()}>Ordenar</button>
      </div>

    );
  }

  renderActiveFilters(filterByNumericValues) {
    return (
      <div>
        {filterByNumericValues.map(({ column, comparison, value }, index) => (
          <p>
            {`Filtro aplicado: ${column} | ${comparison} | ${value}`}
            <button
              type="button"
              data-testid="filter"
              onClick={() => this.handleRemove(index, column)}
            >
              X
            </button>
          </p>
        ))}
      </div>
    );
  }

  render() {
    const { filterByNumericValues } = this.props;
    return (
      <div>
        <div className="filterBox">
          {this.renderInputName()}
          {this.renderOptionsFilter()}
          {this.renderComparisonFilter()}
          {this.renderValueFilter()}
          {this.renderSubmitButton()}
        </div>
        {this.renderSortFilter()}
        <div>
          {filterByNumericValues[0].column !== '' && this.renderActiveFilters(filterByNumericValues)}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({
  filters: { filterByNumericValues },
}) => ({
  filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    filterNames: actionFilterNames,
    addFilter: actionAddFilterValues,
    removeFilter: actionRemoveFilterValues,
    sortFilter: actionSortFilter,
  }, dispatch,
);

Filters.propTypes = {
  filterNames: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.instanceOf(Array),
};

Filters.defaultProps = {
  filterByNumericValues: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

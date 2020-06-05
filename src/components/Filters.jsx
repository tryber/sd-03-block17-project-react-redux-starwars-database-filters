import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterByName from '../actions/filterByName';
import filterByNumericValue from '../actions/filterByNumericValue';
import Option from './Option';
import disable from '../actions/disable';
import enable from '../actions/enable';
import removeFilter from '../actions/removeFilter';
import orderChange from '../actions/orderChange';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'all',
      comparison: 'all',
      value: 0,
      orderColumn: 'name',
      orderSort: 'ASC',
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectColumn = this.selectColumn.bind(this);
    this.selectComparison = this.selectComparison.bind(this);
    this.filterValueInput = this.filterValueInput.bind(this);
    this.filterButton = this.filterButton.bind(this);
    this.activeFiltersTable = this.activeFiltersTable.bind(this);
    this.columnSort = this.columnSort.bind(this);
    this.sortRadios = this.sortRadios.bind(this);
    this.sortInput = this.sortInput.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  selectColumn() {
    const { avaliableFilters } = this.props;
    return (
      <select data-testid="column-filter" id="column" onChange={(e) => this.handleChange(e)}>
        {avaliableFilters.columnFilters.reduce((acc, { name, avaliable }) => {
          if (avaliable) acc.push(<Option key={name} name={name} />);
          return acc;
        }, [])}
      </select>
    );
  }

  selectComparison() {
    const { avaliableFilters } = this.props;
    return (
      <select
        data-testid="comparison-filter"
        id="comparison"
        onChange={(e) => this.handleChange(e)}
      >
        {avaliableFilters.comparisonFilters.map((filter) => (
          <Option key={filter} name={filter} />
        ))}
      </select>
    );
  }

  filterValueInput() {
    const { value } = this.state;
    return (
      <input
        data-testid="value-filter"
        id="value"
        type="number"
        value={value}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }

  filterButton() {
    const { byNumeric, avaliableFilters } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => {
          if (column !== 'all' && comparison !== 'all' && value) {
            byNumeric(column, comparison, value);
            const newAvaliableFilters = avaliableFilters.columnFilters;
            newAvaliableFilters[
              newAvaliableFilters.findIndex((filter) => filter.name === column)
            ].avaliable = false;
            disable(newAvaliableFilters);
            this.setState({ column: 'all' });
          }
        }}
      >
        Filtrar
      </button>
    );
  }

  activeFiltersTable() {
    const { activeFilters, rmFilter, avaliableFilters } = this.props;
    return (
      <ul className="list-group">
        {activeFilters.map(({ column, comparison, value }, index) => (
          <li className="list-group-item" key={column} data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const newActiveFilters = activeFilters;
                newActiveFilters.splice(index, 1);
                rmFilter(newActiveFilters);
                const newAvaliableFilters = avaliableFilters.columnFilters;
                newAvaliableFilters[
                  newAvaliableFilters.findIndex((filter) => filter.name === column)
                ].avaliable = true;
                enable(newAvaliableFilters);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }

  columnSort() {
    return (
      <select data-testid="column-sort" id="orderColumn" onChange={(e) => this.handleChange(e)}>
        <option>name</option>
        <option>climate</option>
        <option>created</option>
        <option>diameter</option>
        <option>edited</option>
        <option>films</option>
        <option>gravity</option>
        <option>orbital_period</option>
        <option>population</option>
        <option>rotation_period</option>
        <option>surface_water</option>
        <option>terrain</option>
        <option>url</option>
      </select>
    );
  }

  handleSortRadioClick(e) {
    this.setState({
      orderSort: e.target.value,
    });
  }

  sortRadios() {
    return (
      <div>
        <input
          type="radio"
          data-testid="column-sort-input"
          name="order"
          value="ASC"
          onClick={(e) => this.handleSortRadioClick(e)}
        />
        <input
          type="radio"
          data-testid="column-sort-input"
          name="order"
          value="DESC"
          onClick={(e) => this.handleSortRadioClick(e)}
        />
      </div>
    );
  }

  sortInput() {
    const { changeSort } = this.props;
    const { orderColumn, orderSort } = this.state;
    return (
      <input
        type="button"
        value="ordenar"
        data-testid="column-sort-button"
        onClick={() => changeSort({ column: orderColumn, sort: orderSort })}
      />
    );
  }

  render() {
    const { byName } = this.props;
    return (
      <div>
        <input data-testid="name-filter" type="text" onChange={(e) => byName(e.target.value)} />
        {this.selectColumn()}
        {this.selectComparison()}
        {this.filterValueInput()}
        {this.filterButton()}
        {this.activeFiltersTable()}
        {this.columnSort()}
        {this.sortRadios()}
        {this.sortInput()}
      </div>
    );
  }
}

Filters.propTypes = {
  byName: PropTypes.func.isRequired,
  byNumeric: PropTypes.func.isRequired,
  rmFilter: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  avaliableFilters: PropTypes.objectOf(PropTypes.array).isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      byName: filterByName,
      byNumeric: filterByNumericValue,
      disable: disable,
      enable: enable,
      rmFilter: removeFilter,
      changeSort: orderChange,
    },
    dispatch,
  );

const mapStateToProps = (state) => ({
  avaliableFilters: state.filters.avaliableFilters,
  activeFilters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

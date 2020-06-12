import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { optionPopulation, erase, sort } from '../actions/apiTbela';

const options = (value) => value.columnFilters.map((row) => {
  if (row.avaliable) return <option value={`${row.name}`}>{row.name}</option>;
  return false;
});

const returnThisValue = (all, eraseThisElement, population) => {
  const EraseName = all.columnFilters;
  const eraseDisplay = all.filterByNumericValues.filter((filter) => filter.column !== population);
  EraseName[EraseName.findIndex((filter) => filter.name === population)].avaliable = true;
  eraseThisElement(EraseName, eraseDisplay);
};

const submitChange = (submitToState, all, population, value, numbOfPop) => {
  const newAvaliableFilters = all.columnFilters;
  if (population !== 'all') {
    newAvaliableFilters[
      newAvaliableFilters.findIndex((filter) => filter.name === population)
    ].avaliable = false;
    submitToState(population, value, numbOfPop, newAvaliableFilters);
  }
};

const selected = (valueRow, value, numbOfPop, eraseThisElement) => valueRow.columnFilters
  .map((row) => {
    if (row.avaliable === false) {
      return (
        <div data-testid="filter">
          <h4>{`${row.name} ${value} ${numbOfPop}`}</h4>
          <button
            type="button"
            onClick={() => returnThisValue(valueRow, eraseThisElement, row.name)}
          >
            x
          </button>
        </div>
      );
    }
    return false;
  });

class ValueFilters extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      population: 'population',
      value: 'igual a',
      numbOfPop: '200000',
      orderColumn: 'name',
      order: 'ASC',
    });
    this.columnChange = this.columnChange.bind(this);
    this.biggerChange = this.biggerChange.bind(this);
    this.numb = this.numb.bind(this);
    this.handleSortRadioClick = this.handleSortRadioClick.bind(this);
  }

  handleChange(e) { this.setState({ [e.target.id]: e.target.value }); }

  columnChange(value) { this.setState({ population: value.target.value }); }

  biggerChange(value) { this.setState({ value: value.target.value }); }

  numb(event) { this.setState({ numbOfPop: event.target.value }); }

  handleSortRadioClick(value) { this.setState({ order: value.target.value }); }

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


  changeSort(orderProp, test, order) {
    const { orderColumn } = this.state;
    if (order === 'ASC') {
      return orderProp.sort(function (a, b) {
        if (a[orderColumn] > b[orderColumn]) { return 1; }
        if (a[orderColumn] < b[orderColumn]) { return -1; }
        return 0;
      });
    }
    if (order === 'DESC') {
      return orderProp.sort(function (a, b) {
        if (a[orderColumn] < b[orderColumn]) { return 1; }
        if (a[orderColumn] > b[orderColumn]) { return -1; }
        return 0;
      });
    }
    return 0;
  }

  sortRadios() {
    const { orderProp, test } = this.props;
    const { order, orderColumn } = this.state;
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
        <input
          type="button"
          data-testid="column-sort-button"
          onClick={() => test(
            this.changeSort(orderProp, test, order), { column: orderColumn, order }
          )}
        />
      </div>
    );
  }

  render() {
    const { population, value, numbOfPop } = this.state;
    const { eraseThisElement, all, submitToState } = this.props;
    return (
      <div>
        <select data-testid="column-filter" value={population} onChange={this.columnChange}>
          {options(all)}
        </select>
        <select data-testid="comparison-filter" value={value} onChange={this.biggerChange}>
          <option value="">-</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input data-testid="value-filter" type="number" value={numbOfPop} onChange={this.numb} />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => (submitChange(submitToState, all, population, value, numbOfPop))}
        >
          filtrar
        </button>
        {this.sortRadios()}
        {this.columnSort()}
        {selected(all, value, numbOfPop, eraseThisElement)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orderProp: state.data.results,
  all: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  submitToState: (population, value, numbOfPop) => dispatch(
    optionPopulation(population, value, numbOfPop),
  ),
  eraseThisElement: (population, newObject) => dispatch(erase(population, newObject)),
  test: (value, obj) => dispatch(sort(value, obj)),
});

ValueFilters.propTypes = {
  orderProp: PropTypes.func.isRequired,
  test: PropTypes.func.isRequired,
  submitToState: PropTypes.func.isRequired,
  all: PropTypes.func.isRequired,
  eraseThisElement: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueFilters);

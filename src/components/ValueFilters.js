import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { optionPopulation, erase } from '../actions/apiTbela';

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
    });
    this.columnChange = this.columnChange.bind(this);
    this.biggerChange = this.biggerChange.bind(this);
    this.numb = this.numb.bind(this);
  }

  columnChange(value) { this.setState({ population: value.target.value }); }

  biggerChange(value) { this.setState({ value: value.target.value }); }

  numb(event) { this.setState({ numbOfPop: event.target.value }); }

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
        {selected(all, value, numbOfPop, eraseThisElement)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  all: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  submitToState: (population, value, numbOfPop) => dispatch(
    optionPopulation(population, value, numbOfPop),
  ),
  eraseThisElement: (population, newObject) => dispatch(erase(population, newObject)),
});

ValueFilters.propTypes = {
  submitToState: PropTypes.func.isRequired,
  all: PropTypes.func.isRequired,
  eraseThisElement: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueFilters);

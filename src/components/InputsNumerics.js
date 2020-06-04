import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterSelectors } from '../actions/index';


class InputsNumerics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelect: 'population',
      comparison: 'bigger_then',
      valueFilter: '',
    };
    this.onChangeFilterSelect = this.onChangeFilterSelect.bind(this);
    this.onChangeComparison = this.onChangeComparison.bind(this);
    this.onChangeValueFilter = this.onChangeValueFilter.bind(this);
    this.onClickDispatchSelectors = this.onClickDispatchSelectors.bind(this);
  }

  onChangeFilterSelect(event) {
    this.setState({ filterSelect: event.target.value });
  }

  onChangeComparison(event) {
    this.setState({ comparison: event.target.value });
  }

  onChangeValueFilter(event) {
    this.setState({ valueFilter: event.target.value });
  }

  onClickDispatchSelectors() {
    const { filterSelect, comparison, valueFilter } = this.state;
    const { selectors } = this.props;
    selectors(filterSelect, comparison, valueFilter);
  }

  selectFilter() {
    return (
      <select data-testid="column-filter" onChange={this.onChangeFilterSelect}>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    );
  }

  selectComparison() {
    return (
      <select data-testid="comparison-filter" onChange={this.onChangeComparison}>
        <option value="bigger_then">maior que</option>
        <option value="less_then">menor que</option>
        <option value="equal">igual a</option>
      </select>
    );
  }

  valueFilterInput() {
    return (
      <label htmlFor="valueFilter">
        Valor:
        <input
          data-testid="value-filter"
          name="valueFilter"
          type="number"
          onChange={this.onChangeValueFilter}
        />
      </label>
    );
  }

  buttonFilter() {
    return (
      <div>
        <button
          data-testid="button-filter"
          onClick={this.onClickDispatchSelectors}
        >
          Filtrar
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.selectFilter()}
        {this.selectComparison()}
        {this.valueFilterInput()}
        {this.buttonFilter()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectors:
    (filterSelect, comparison, valueFilter) =>
      dispatch(filterSelectors(filterSelect, comparison, valueFilter)),
});

InputsNumerics.propTypes = {
  selectors: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(InputsNumerics);

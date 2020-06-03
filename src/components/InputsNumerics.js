import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterSelectors } from '../actions/index';


class InputsNumerics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelect: '',
      comparison: '',
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
        <option></option>
        <option value="population">population</option>
        <option value="orbital_period">Orbital period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation period</option>
        <option value="surface_water">Rurface water</option>
      </select>
    );
  }

  selectComparison() {
    return (
      <select data-testid="comparison-filter" onChange={this.onChangeComparison}>
        <option></option>
        <option value="bigger_then">Maior que</option>
        <option value="less_than">Menor que</option>
        <option value="equal">Igual</option>
      </select>
    );
  }

  valueFilterInput() {
    return (
      <label htmlFor="valueFilter">
        Valor:
        <input
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
          data-testid='button-filter'
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
  selectors: (filterSelect, comparison, valueFilter) => dispatch(filterSelectors(filterSelect, comparison, valueFilter)),
});

InputsNumerics.propTypes = {
  selectors: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(InputsNumerics);

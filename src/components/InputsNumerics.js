import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterSelectors, removeFilter } from '../actions/index';


class InputsNumerics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelect: '',
      comparison: '',
      valueFilter: '',
      options: [
        { value: '', text: '' },
        { value: 'population', text: 'population' },
        { value: 'orbital_period', text: 'orbital_period' },
        { value: 'diameter', text: 'diameter' },
        { value: 'rotation_period', text: 'rotation_period' },
        { value: 'surface_water', text: 'surface_water' },
      ],
    };
    this.onChangeFilterSelect = this.onChangeFilterSelect.bind(this);
    this.onChangeComparison = this.onChangeComparison.bind(this);
    this.onChangeValueFilter = this.onChangeValueFilter.bind(this);
    this.onClickDispatchSelectors = this.onClickDispatchSelectors.bind(this);
    this.onClickRemoveFilter = this.onClickRemoveFilter.bind(this);
  }

  onChangeFilterSelect(event) {
    const { value } = event.target;
    this.setState({ filterSelect: value });
  }

  onChangeComparison(event) {
    this.setState({ comparison: event.target.value });
  }

  onChangeValueFilter(event) {
    this.setState({ valueFilter: event.target.value });
  }

  onClickDispatchSelectors() {
    const { filterSelect, comparison, valueFilter, options } = this.state;
    const { selectors } = this.props;
    let newOptions;
    if (filterSelect !== '' && comparison !== '') {
      selectors(filterSelect, comparison, valueFilter);
      newOptions = options.filter((item) =>
        item.value !== filterSelect || item.value === '');
      this.setState({
        options: newOptions,
        filterSelect: '',
      });
    }
  }

  selectFilter() {
    const { options } = this.state;
    return (
      <select data-testid="column-filter" onChange={this.onChangeFilterSelect}>
        {
          options.map((item) =>
            <option
              key={item.value}
              value={item.value}
            >
              {item.text}
            </option>)
        }
      </select>
    );
  }

  selectComparison() {
    return (
      <select data-testid="comparison-filter" onChange={this.onChangeComparison}>
        <option value="" />
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
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

  onClickRemoveFilter(event) {
    const { options } = this.state;
    const { value } = event.target;
    const { filteredSelect, newFilterSelect } = this.props;
    const newFilteredSelect = filteredSelect.filter((item) => item.column !== value);
    const optionSelect = {
      value,
      text: value,
    };
    newFilterSelect(newFilteredSelect);
    this.setState({ options: [...options, optionSelect]});
  }

  filteredList() {
    const { filteredSelect } = this.props;
    return (
      <div>
        {
          filteredSelect.map((item) =>
            <div
              key={item.column}
            >
              {item.column}
              <button
                data-testid="filter"
                value={item.column}
                onClick={this.onClickRemoveFilter}
              >
                X
              </button>
            </div>)}
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
        {this.filteredList()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectors:
    (filterSelect, comparison, valueFilter) =>
      dispatch(filterSelectors(filterSelect, comparison, valueFilter)),
  newFilterSelect: (value) => (dispatch(removeFilter(value))),
});

const mapStateToProps = (state) => ({
  filteredSelect: state.filters.filterByNumericValues,
});

InputsNumerics.propTypes = {
  selectors: PropTypes.func.isRequired,
  filteredSelect: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputsNumerics);

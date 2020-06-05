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
      options: [
        { value: '', text: '' },
        { value: 'population', text: 'population' },
        { value: 'orbital_period', text: 'orbital_period' },
        { value: 'diameter', text: 'diameter' },
        { value: 'rotation_period', text: 'rotation_period' },
        { value: 'surface_water', text: 'surface_water' },
      ],
      optionsSelected: [],
    };
    this.onChangeFilterSelect = this.onChangeFilterSelect.bind(this);
    this.onChangeComparison = this.onChangeComparison.bind(this);
    this.onChangeValueFilter = this.onChangeValueFilter.bind(this);
    this.onClickDispatchSelectors = this.onClickDispatchSelectors.bind(this);
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
    const { filterSelect, comparison, valueFilter, options, optionsSelected } = this.state;
    const { selectors } = this.props;
    selectors(filterSelect, comparison, valueFilter);
    const newOptions = options.filter((item) =>
      item.value !== filterSelect || item.value === '');
    if (filterSelect !== '') {
      this.setState({ optionsSelected: [...optionsSelected, filterSelect] });
    }
    this.setState({
      options: newOptions,
      filterSelect: '',
    });
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
        <option value=""></option>
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

  filteredList() {
    const { filteredSelect } = this.props;
    return (
      <div>
        {
          filteredSelect.map((item) =>
            <p
              key={item.column}
            >
              {item.column}
            </p>)}
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
});

const mapStateToProps = (state) => ({
  filteredSelect: state.filters.filterByNumericValues,
});

InputsNumerics.propTypes = {
  selectors: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputsNumerics);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumeric } from '../action/index';

export class FilterNumeric extends Component {
  static translateStateToArray(state) {
    const finalArray = [];
    state.map((option) => finalArray.push(option.column));
    return finalArray;
  }

  constructor(props) {
    super(props);
    this.filterNumbers = this.filterNumbers.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
  }

  filterNumbers() {
    const { filterNumber } = this.props;
    // const textInput = document.getElementById('filter_name');
    const column = document.getElementById('filter');
    const comparation = document.getElementById('comparation');
    const value = document.getElementById('input-value');
    if (column.selectedIndex > 0 && comparation.selectedIndex > 0 && value.value !== '') {
      const SelectionColumn = column.options[column.selectedIndex].value;

      const selectioncomparation = comparation.options[comparation.selectedIndex].value;

      const selectionValue = value.value;

      filterNumber(SelectionColumn, selectioncomparation, selectionValue);
    } else {
      alert('Preencha Todos os campos para filtrar !');
    }
  }


  filterOptions() {
    const { numericValues } = this.props;
    const optionList = ['Selecione uma Opção', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const arrayColumState = FilterNumeric.translateStateToArray(numericValues);
    const filteredOptions = optionList.filter((option) => !arrayColumState.includes(option));
    return filteredOptions;
  }

  render() {
    const optionListToRender = this.filterOptions();
    return (
      <div>
        <select data-testid="column-filter" id="filter">
          {optionListToRender.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select data-testid="comparison-filter" id="comparation">
          <option value=" ">Selecione Uma Opção </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input type="number" placeholder="numeros" id="input-value" data-testid="value-filter" />
        <button
          type="button"
          onClick={(e) => this.filterNumbers(e)}
          data-testid="button-filter"
        >
        Filtrar
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterNumber: (e, v, h) => dispatch(filterNumeric(e, v, h)),
});

FilterNumeric.propTypes = {
  filterNumber: PropTypes.instanceOf(Function),
  numericValues: PropTypes.instanceOf(Array),
};

FilterNumeric.defaultProps = {
  filterNumber: '',
  numericValues: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterNumeric);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNameAction } from '../actions/filterByNameAction';
import { filtersNameAction } from '../actions/filtersNameAction';
import { filterByNumericValuesAction } from '../actions/filterByNumericValuesAction';
import { choosedColToSortAction } from '../actions/choosedColToSortAction';


class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'all',
      comparison: '',
      value: '',
      sortType: '',
      sortColumn: '',
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.numericFilter = this.numericFilter.bind(this);
  }

  onChangeText(event) {
    const { value } = event.target;
    const { filterByName } = this.props;
    filterByName(value);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  searchbar() {
    const { typedText } = this.props;
    return (
      <div>
        <label htmlFor="searchbar">
          <input
            data-testid="name-filter"
            type="text"
            onChange={this.onChangeText}
            id="searchbar"
            name="searchbar"
            value={typedText}
            placeholder="Digite um nome de planeta"
          />
        </label>
      </div>
    );
  }

  numericSearchCol() {
    const { column } = this.state;
    const { allFiltersArr } = this.props;
    // console.log(allFiltersArr)
    return (
      <select onChange={this.handleChange} value={column} name="column" data-testid="column-filter">
        {allFiltersArr.map((e) => (<option key={e} value={e}>{e}</option>))}
      </select>
    );
  }

  numericSearchGreat() {
    const { comparison } = this.state;
    return (
      <select
        onChange={this.handleChange}
        value={comparison}
        name="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
        <option value="" />
      </select>
    );
  }

  numericSearchValue() {
    const { value } = this.state;
    return (
      <div>
        <label htmlFor="numericValue">
          <input
            data-testid="value-filter"
            type="number"
            onChange={this.handleChange}
            id="numericValue"
            name="value"
            value={value}
            placeholder="Digite um valor númerico"
          />
        </label>
      </div>
    );
  }

  displayFilterName() {
    const { allFiltersArr, changeFiltersDisplay } = this.props;
    const { column } = this.state;
    const index = allFiltersArr.indexOf(column);
    const newArr = [...allFiltersArr];
    newArr.splice(index, 1);
    changeFiltersDisplay(newArr);
  }

  numericFilter() {
    const { column, value, comparison } = this.state;
    const { filterByNumericValues } = this.props;
    const newObj = { column, value, comparison };
    this.setState({ column: '', value: '', comparison: '' });
    filterByNumericValues(newObj);
    this.displayFilterName();
  }

  numericFilterButton() {
    return (
      <button data-testid="button-filter" type="button" onClick={this.numericFilter}>
        Search
      </button>
    );
  }

  colToSort() {
    const { sortColumn } = this.state;
    return (
      <select
        data-testid="column-sort"
        value={sortColumn}
        name="sortColumn"
        onChange={this.handleChange}
      >
        <option value="name">name</option>
        <option value="rotational_period">rotational_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="gravity">gravity</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
      </select>
    );
  }

  radioDescAsc() {
    return (
      <div>
        <label htmlFor="desc">
          Descendente
          <input
            data-testid="column-sort-input"
            value="DESC"
            onClick={this.handleChange}
            type="radio"
            name="sortType"
            id="desc"
          />
        </label>
        <label htmlFor="asc">
          Ascendente
          <input
            data-testid="column-sort-input"
            value="ASC"
            onClick={this.handleChange}
            type="radio"
            name="sortType"
            id="asc"
          />
        </label>
      </div>
    );
  }

  sortButton() {
    const { sortColumn, sortType } = this.state;
    const { choosedCol } = this.props;
    const sortObj = { column: sortColumn, sort: sortType };
    return (
      <button data-testid="column-sort-button" type="button" onClick={() => choosedCol(sortObj)}>
        Sort Table
      </button>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.searchbar()}
          {this.numericSearchCol()}
          {this.numericSearchGreat()}
          {this.numericSearchValue()}
          {this.numericFilterButton()}
        </div>
        <div>
          {this.colToSort()}
          {this.radioDescAsc()}
          {this.sortButton()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (text) => dispatch(filterByNameAction(text)),
  filterByNumericValues: (obj) => dispatch(filterByNumericValuesAction(obj)),
  changeFiltersDisplay: (arr) => dispatch(filtersNameAction(arr)),
  choosedCol: (obj) => dispatch(choosedColToSortAction(obj)),
});

const mapStateToProps = (state) => ({
  dataSw: state.apiSWReducer.data,
  isLoading: state.apiSWReducer.loading,
  typedText: state.filters.filterByName.name,
  numericSearched: state.filters.filterByNumericValues,
  allFiltersArr: state.filtersArrReducer.allFilters,
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);

Inputs.propTypes = {
  typedText: PropTypes.string,
  allFiltersArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterByName: PropTypes.func,
  changeFiltersDisplay: PropTypes.func,
  filterByNumericValues: PropTypes.func,
  choosedCol: PropTypes.func,
};

Inputs.defaultProps = {
  typedText: '',
  filterByName: () => {},
  filterByNumericValues: () => {},
  changeFiltersDisplay: () => {},
  choosedCol: () => {},
};

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import TableHeaders from './TableHeaders';
import Inputs from './Inputs';
import SelectedFilters from './SelectedFilters';
import TableData from './TableData';
import { filterByNameAction } from '../actions/filterByNameAction';
import { filterByNumericValuesAction } from '../actions/filterByNumericValuesAction';

const greaterThan = (column, value, obj) => {
  if (!(Number(obj[column]) > Number(value))) return false;
  return true;
};

const lessThan = (column, value, obj) => {
  if (!(Number(obj[column]) < Number(value))) return false;
  return true;
};

const equal = (column, value, obj) => {
  if (!(Number(obj[column]) === Number(value))) return false;
  return true;
};

const GreaterLessEqual = (operator, column, value, obj) => {
  switch (operator) {
    case 'maior que':
      return greaterThan(column, value, obj);
    case 'menor que':
      return lessThan(column, value, obj);
    case 'igual a':
      return equal(column, value, obj);
    default:
      return true;
  }
};

class Table extends React.Component {
  helperFunction(obj) {
    const { typedText, numericSearched } = this.props;
    if (!obj.name.toLowerCase().includes(typedText.toLowerCase()) && typedText !== '') return false;
    for (let i = 0; i < numericSearched.length; i += 1) {
      const { column, value, comparison } = numericSearched[i];
      if (!GreaterLessEqual(comparison, column, value, obj)) return false;
    }
    return true;
  }

  dataFilterFunction() {
    const { dataSw, typedText, numericSearched } = this.props;
    const newArrToFilter = [...dataSw];
    if (typedText !== '' || numericSearched.length > 0) {
      return newArrToFilter.reduce((acc, planetObj) => {
        if (this.helperFunction(planetObj)) acc.push(planetObj);
        return acc;
      }, []);
    }
    return dataSw;
  }

  sortDescCol() {
    const { sortCol } = this.props;
    const { column } = sortCol;
    const columnLowerCase = column.toLowerCase();
    const dataFiltered = this.dataFilterFunction();
    return dataFiltered.sort(function (a, b) {
      if (columnLowerCase === 'name') {
        if (a[columnLowerCase] < b[columnLowerCase]) return 1;
        if (a[columnLowerCase] > b[columnLowerCase]) return -1;
        return 0;
      }
      if (Number(a[columnLowerCase]) < Number(b[columnLowerCase])) return 1;
      if (Number(a[columnLowerCase]) > Number(b[columnLowerCase])) return -1;
      return 0;
    });
  }

  sortAscCol() {
    const { sortCol } = this.props;
    const { column } = sortCol;
    const columnLowerCase = column.toLowerCase();
    const dataFiltered = this.dataFilterFunction();
    return dataFiltered.sort(function (a, b) {
      if (columnLowerCase === 'name') {
        if (a[columnLowerCase] > b[columnLowerCase]) return 1;
        if (a[columnLowerCase] < b[columnLowerCase]) return -1;
        return 0;
      }
      if (Number(a[columnLowerCase]) > Number(b[columnLowerCase])) return 1;
      if (Number(a[columnLowerCase]) < Number(b[columnLowerCase])) return -1;
      return 0;
    });
  }

  dataSortFunction() {
    const { sortCol } = this.props;
    if (sortCol.sort === 'DESC') return this.sortDescCol();
    return this.sortAscCol();
  }

  render() {
    return (
      <div>
        <Header />
        <Inputs />
        <SelectedFilters />
        <table>
          <TableHeaders />
          <TableData dataSw={this.dataSortFunction()} />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (text) => dispatch(filterByNameAction(text)),
  filterByNumericValues: (obj) => dispatch(filterByNumericValuesAction(obj)),
});

const mapStateToProps = (state) => ({
  dataSw: state.apiSWReducer.data,
  isLoading: state.apiSWReducer.loading,
  typedText: state.filters.filterByName.name,
  numericSearched: state.filters.filterByNumericValues,
  sortCol: state.filters.order,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  typedText: PropTypes.string,
  dataSw: PropTypes.arrayOf(PropTypes.object),
  numericSearched: PropTypes.arrayOf(PropTypes.object),
  sortCol: PropTypes.objectOf(PropTypes.any),
};

Table.defaultProps = {
  typedText: '',
  dataSw: [],
  numericSearched: {},
  sortCol: {},
};

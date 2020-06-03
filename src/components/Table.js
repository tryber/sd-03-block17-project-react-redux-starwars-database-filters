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

const GreaterLessEqual = (operator, column, value, obj) => {
  switch (operator) {
    case 'maior que':
      if (!(Number(obj[column]) > value)) return false;
      break;
    case 'menor que':
      if (!(Number(obj[column]) < value)) return false;
      break;
    case 'igual a':
      if (!(Number(obj[column]) === value)) return false;
      break;
    default:
      return true;
  }
  return true;
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

  render() {
    return (
      <div>
        <Header />
        <Inputs />
        <SelectedFilters />
        <table>
          <TableHeaders />
          <TableData dataSw={this.dataFilterFunction()} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  typedText: PropTypes.string,
  dataSw: PropTypes.arrayOf(PropTypes.object),
  numericSearched: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  typedText: '',
  dataSw: [],
  numericSearched: {},
};

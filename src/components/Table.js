import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { element } from 'prop-types';
import Header from './Header';
import TableHeaders from './TableHeaders';
import Inputs from './Inputs';
import SelectedFilters from './SelectedFilters';
import TableData from './TableData';
import { filterByNameAction } from '../actions/filterByNameAction';
import { filterByNumericValuesAction } from '../actions/filterByNumericValuesAction';

class Table extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     column: 'all',
  //     comparison: '',
  //     value: '',
  //   };
  //   this.onChangeText = this.onChangeText.bind(this);
  //   this.dataFilterFunction = this.dataFilterFunction.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.numericFilter = this.numericFilter.bind(this);
  // }

  // onChangeText(event) {
  //   const { value } = event.target;
  //   const { filterByName } = this.props;
  //   filterByName(value);
  // }

  // handleChange(event) {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value });
  // }

  dataFilterFunction() {
    const { dataSw, typedText, numericSearched } = this.props;
    const newArrToFilter = [...dataSw];
    if (typedText !== '' || numericSearched.length > 0) {
      return newArrToFilter.reduce((acc, e) => {
        if (typedText !== '' && e.name.toLowerCase().includes(typedText.toLowerCase())) acc.push(e);
        return acc;
      }, []);
    }
    return dataSw;
  }

  // searchbar() {
  //   const { typedText } = this.props;
  //   return (
  //     <div>
  //       <label htmlFor="searchbar">
  //         <input
  //           data-testid="name-filter"
  //           type="text"
  //           onChange={this.onChangeText}
  //           id="searchbar"
  //           name="searchbar"
  //           value={typedText}
  //           placeholder="Digite um nome de planeta"
  //         />
  //       </label>
  //     </div>
  //   );
  // }

  // numericSearchCol() {
  //   const { column } = this.state;
  //   return (
  //     <select onChange={this.handleChange} value={column} name="column" data-testid="column-filter">
  //       <option value="population">population</option>
  //       <option value="orbital_period">orbital_period</option>
  //       <option value="diameter">diameter</option>
  //       <option value="rotation_period">rotation_period</option>
  //       <option value="surface_water">surface_water</option>
  //       <option value="all">all</option>
  //     </select>
  //   );
  // }

  // numericSearchGreat() {
  //   const { comparison } = this.state;
  //   return (
  //     <select
  //       onChange={this.handleChange}
  //       value={comparison}
  //       name="comparison"
  //       data-testid="comparison-filter"
  //     >
  //       <option value="Maior que">Maior que</option>
  //       <option value="Menor que">Menor que</option>
  //       <option value="Igual a">Igual a</option>
  //     </select>
  //   );
  // }

  // numericSearchValue() {
  //   const { value } = this.state;
  //   return (
  //     <div>
  //       <label htmlFor="numericValue">
  //         <input
  //           data-testid="value-filter"
  //           type="number"
  //           onChange={this.handleChange}
  //           id="numericValue"
  //           name="value"
  //           value={value}
  //           placeholder="Digite um valor númerico"
  //         />
  //       </label>
  //     </div>
  //   );
  // }

  // numericFilter() {
  //   const { column, value, comparison } = this.state;
  //   const { filterByNumericValues } = this.props;
  //   const newObj = { column, value, comparison };
  //   this.setState({ column: '', value: '', comparison: '' });
  //   filterByNumericValues(newObj);
  //   console.log('Button Search Chamado')
  //   this.dataFilterFunction()
  // }

  // numericFilterButton() {
  //   return (
  //     <button type="button" onClick={this.numericFilter}>
  //       Search
  //     </button>
  //   );
  // }

  render() {
    console.log('render chamado')
    return (
      <div>
        <Header />
        <Inputs />
        {/* {this.searchbar()}
        {this.numericSearchCol()}
        {this.numericSearchGreat()}
        {this.numericSearchValue()} */}
        {/* {this.numericFilterButton()} */}
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
  filterByName: PropTypes.func,
  filterByNumericValues: PropTypes.func,
};

Table.defaultProps = {
  typedText: '',
  dataSw: [],
  filterByName: () => {},
  filterByNumericValues: () => {},
};

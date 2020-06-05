import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

class Table extends Component {
  static handleFilter(list, { column, comparison, value }) {
    switch (comparison) {
      case 'Maior que': return list.filter(((planet) => Number(planet[column]) > value));
      case 'Menor que': return list.filter(((planet) => Number(planet[column]) < value));
      case 'Igual a': return list.filter(((planet) => Number(planet[column]) === value));
      default: return list;
    }
  }
  render() {
    const { planetList, nameFilter, numericFilters } = this.props;
    let sortedList = planetList.filter((planet) => planet.name.includes(nameFilter));
    numericFilters.forEach((e) => { sortedList = Table.handleFilter(sortedList, e) });
    return (
      <table>
        <TableHeader />
        <TableBody planets={sortedList} />
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    planetList: state.Planet.data,
    nameFilter: state.Filter.filters.filterByName.name,
    numericFilters: state.Filter.filters.filterByNumericValue,
  });
};
export default connect(mapStateToProps)(Table);

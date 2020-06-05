import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

class Table extends Component {
  static handleFilter(list, { column, comparison, value }) {
    switch (comparison) {
      case 'maior que': return list.filter(((planet) => Number(planet[column]) > Number(value)));
      case 'menor que': return list.filter(((planet) => Number(planet[column]) < Number(value)));
      case 'igual a': return list.filter(((planet) => Number(planet[column]) === Number(value)));
      default: return list;
    }
  }
  render() {
    const { planetList, nameFilter, numericFilters } = this.props;
    let sortedList = planetList.filter((planet) => planet.name.includes(nameFilter));
    numericFilters.forEach((e) => { sortedList = Table.handleFilter(sortedList, e); });
    return (
      <table>
        <TableHeader />
        <TableBody planets={sortedList} />
      </table>
    );
  }
}

Table.propTypes = {
  planetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.string.isRequired,
  numericFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    planetList: state.Planet.data,
    nameFilter: state.filters.filterByName.name,
    numericFilters: state.filters.filterByNumericValues,
  });
};
export default connect(mapStateToProps)(Table);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const returnComparator = (elem, col, comp, val) => {
  switch (comp) {
    case 'menor que':
      return (Number(elem[col]) < +val);
    case 'igual a':
      return (Number(elem[col]) === +val);
    case 'maior que':
      return (Number(elem[col]) > +val);
    default:
      return false;
  }
};

class Table extends React.Component {
  numericFilter(planets) {
    const { numFilter } = this.props;
    return numFilter.reduce((acc, {
      column, comparison, value,
    }) => acc.filter((planet) => returnComparator(planet, column, comparison, value)), planets);
  }

  // validateAllNumericFilters = (planet, filter) => {
  //   filter.forEach(({column, comparison, value}) =>
  //   returnComparator(planet, column, comparison, value))
  // }

  render() {
    const { planets, nameFilter } = this.props;
    const filteredByName = planets.filter((pl) => (
      pl.name.toLowerCase()).includes(nameFilter.name));
    const filteredByBoth = this.numericFilter(filteredByName);
    return (
      <div>
        <h2>StarWars Datatable with Filters</h2>
        <table>
          <thead>
            <tr>
              <th key='name'>Name</th>
              <th key='diameter'>Diameter</th>
              <th key='population'>Population</th>
              <th key='climate'>Climate</th>
              <th key='orbital'>Orbital period</th>
              <th key='rotation'>Rotation period</th>
              <th key='terrain'>Terrain</th>
              <th key='water'>Surface Water</th>
              <th key='gravity'>Gravity</th>
              <th key='films'>Films</th>
              <th key='created'>Created</th>
              <th key='edited'>Edited</th>
              <th key='url'>URL</th>
            </tr>
          </thead>
          <tbody>
            {filteredByBoth.map((ftplanet) => TableRow(ftplanet))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numFilter: state.filters.filterByNumericValues,
});

Table.defaultProps = {
  nameFilter: [],
  numFilter: [],
};

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.objectOf((PropTypes.string.isRequired)),
  numFilter: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default connect(mapStateToProps)(Table);

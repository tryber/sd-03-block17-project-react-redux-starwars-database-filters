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
  //    returnComparator(planet, column, comparison, value))
  // }

  render() {
    const { planets, nameFilter } = this.props;
    const filteredByName = planets.filter((pl) => (pl.name.toLowerCase()).includes(nameFilter.name));
    const filteredByBoth = this.numericFilter(filteredByName);
    return (
      <div>
        <h2>StarWars Datatable with Filters</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Diameter</th>
              <th>Population</th>
              <th>Climate</th>
              <th>Orbital period</th>
              <th>Rotation period</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Gravity</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
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
    // name: PropTypes.string.isRequired,
    // diameter: PropTypes.string.isRequired,
    // population: PropTypes.string.isRequired,
    // climate: PropTypes.string.isRequired,
    // orbital_period: PropTypes.string.isRequired,
    // rotation_period: PropTypes.string.isRequired,
    // terrain: PropTypes.string.isRequired,
    // surface_water: PropTypes.string.isRequired,
    // gravity: PropTypes.string.isRequired,
    // films: PropTypes.arrayOf(PropTypes.string.isRequired),
    // created: PropTypes.string.isRequired,
    // edited: PropTypes.string.isRequired,
    // url: PropTypes.string.isRequired,
    // }).isRequired,
  nameFilter: PropTypes.arrayOf((PropTypes.string.isRequired)),
  numFilter: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default connect(mapStateToProps)(Table);

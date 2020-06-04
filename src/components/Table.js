import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { connect } from 'react-redux';

export const returnComparator = (col, comp, val, element) => {
  switch (comp) {
    case 'menor que':
      return (element[col] < val);
    case 'igual a':
      return (element[col] === val);
    case 'maior que':
      return (element[col] > val);
    default:
      break;
  }
}

class Table extends React.Component {
  render() {
    const { planets, nameFilter, numFilter } = this.props;
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
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            { planets.filter((planet) => (
              planet.name.toLowerCase()).includes(nameFilter.name) &&
              returnComparator( numFilter[0].column, numFilter[0].comparison, numFilter[0].value, planet)
              )
            .map((planet) => TableRow(planet)) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numFilter: state.filterReducer.filterByNumericValues,
});

Table.propTypes = {
  planets: PropTypes.shape({
    name: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    // films: PropTypes.arrayOf(PropTypes.string.isRequired),
    // created: PropTypes.string.isRequired,
    // edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  nameFilter: PropTypes.object,
};

export default connect(mapStateToProps)(Table);

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const filterFunc = (planets, name, numericValues) => (
  numericValues.length === 0 ? planets.filter((planet) => planet.name.includes(name)) :
    numericValues.reduce((acc, { column, comparison, value }) => (
      acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return planet.name.includes(name) && parseFloat(planet[column]) > parseFloat(value);
          case 'menor que':
            return planet.name.includes(name) && parseFloat(planet[column]) < parseFloat(value);
          case 'igual a':
            return planet.name.includes(name) && parseFloat(planet[column]) === parseFloat(value);
          default:
            return planet.name.includes(name);
        }
      })
    ), planets)
)

/* const mapStateToProps = (state) => (
  {
    planets: state.ReducerPlanets.data,
    name: state.filters.filterByName.name,
    numericValues: state.filters.filterByNumericValues,
  }
); */

export default filterFunc;

/* filterFunc.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    film: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
    columnSort: PropTypes.string,
    sort: PropTypes.string,
  })).isRequired,
}; */
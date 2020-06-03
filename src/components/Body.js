import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Body({ planets, name, column, comparison, value }) {
  const filters = () => (
    planets.filter((planet) => {
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
  );

  return (
    <tbody>
      {filters()
        .map((planet) =>
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films.map((film) => <span key={film}>{film}</span>)}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>,
        )}
    </tbody>
  );
}

const mapStateToProps = (state) => ({
  planets: state.ReducerPlanets.data,
  name: state.filters.filterByName.name,
  column: state.filters.filterByNumericValues[0].column,
  comparison: state.filters.filterByNumericValues[0].comparison,
  value: state.filters.filterByNumericValues[0].value,
});

export default connect(mapStateToProps)(Body);

Body.propTypes = {
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
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterFunc from './filterFunc';

function Body({ planets, name, numericValues, columnSort, sort }) {
  const orders = () => {
    switch (columnSort) {
      case 'Name':
        return filterFunc(planets, name, numericValues).sort((a, b) => (
          sort === 'ASC' ? a.name - b.name : b.name - a.name
        ));
      default:
        return filterFunc(planets, name, numericValues).sort((a, b) => (
          sort === 'ASC' ? a[columnSort] - b[columnSort] : b[columnSort] - a[columnSort]
        ));
    }
  };

  return (
    <tbody>
      {orders().map((planet) =>
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

const mapStateToProps = (state) => (
  {
    planets: state.ReducerPlanets.data,
    name: state.filters.filterByName.name,
    numericValues: state.filters.filterByNumericValues,
    columnSort: state.filters.order.column,
    sort: state.filters.order.sort,
  }
);

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
  numericValues: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
    columnSort: PropTypes.string,
    sort: PropTypes.string,
  })).isRequired,
  columnSort: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

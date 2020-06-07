import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (planet) => (
  <tr key={planet.url}>
    <td>{planet.name}</td>
    <td>{planet.diameter}</td>
    <td>{planet.population}</td>
    <td>{planet.climate}</td>
    <td>{planet.orbital_period}</td>
    <td>{planet.rotation_period}</td>
    <td>{planet.terrain}</td>
    <td>{planet.surface_water}</td>
    <td>{planet.gravity}</td>
    <td>{links(planet.films)}</td>
    <td>{planet.created}</td>
    <td>{planet.edited}</td>
    <td>{planet.url}</td>
  </tr>
);

const links = (movieList) => {
  movieList.map((mov) => <a href={mov}>Veja!</a>)
}

TableRow.propTypes = {
  planet: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableRow;

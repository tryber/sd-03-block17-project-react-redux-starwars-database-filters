import React from 'react';
import PropTypes from 'prop-types';

const TableLine = ({ planet }) => (
  <tr>
    <td>{planet.name}</td>
    <td>{planet.climate}</td>
    <td>{planet.created}</td>
    <td>{planet.diameter}</td>
    <td>{planet.edited}</td>
    <td>{planet.films}</td>
    <td>{planet.gravity}</td>
    <td>{planet.orbital_period}</td>
    <td>{planet.population}</td>
    <td>{planet.rotation_period}</td>
    <td>{planet.surface_water}</td>
    <td>{planet.terrain}</td>
    <td>{planet.url}</td>
  </tr>
);

export default TableLine;

TableLine.protoTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  }).isRequired
};

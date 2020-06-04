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
    <td>{planet.url}</td>
  </tr>
);

TableRow.propTypes = {
  planet: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableRow;

import React from 'react';

const TableLine = ({ planet: { name, climate, created, diameter, edited, films, gravity, orbital_period, population, rotation_period, surface_water, terrain, url } }) => (
  <tr>
    <td>{name}</td>
    <td>{climate}</td>
    <td>{created}</td>
    <td>{diameter}</td>
    <td>{edited}</td>
    <td>{films}</td>
    <td>{gravity}</td>
    <td>{orbital_period}</td>
    <td>{population}</td>
    <td>{rotation_period}</td>
    <td>{surface_water}</td>
    <td>{terrain}</td>
    <td>{url}</td>
  </tr>
);

export default TableLine;

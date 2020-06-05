import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ data }) => (
  <tbody>
    {data.map((planet) => (
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
        <td>
          {planet.films.map((film) => (
            <a href={film} target="_blank" rel="noopener noreferrer" key={film}>
              {film}
            </a>
          ))}
        </td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>
          <a href={planet.url} target="_blank" rel="noopener noreferrer">
            {planet.url}
          </a>
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;

TableBody.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };

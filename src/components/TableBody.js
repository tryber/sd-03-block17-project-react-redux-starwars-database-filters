import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody(props) {
  const { data } = props;
  return (
    <tbody>
      {data.map((planet) => (
        <tr key={planet.name}>
          <th>{planet.name}</th>
          <th>{planet.rotation_period}</th>
          <th>{planet.orbital_period}</th>
          <th>{planet.diameter}</th>
          <th>{planet.climate}</th>
          <th>{planet.gravity}</th>
          <th>{planet.terrain}</th>
          <th>{planet.surface_water}</th>
          <th>{planet.population}</th>
          <th>{planet.films}</th>
          <th>{planet.created}</th>
          <th>{planet.edited}</th>
          <th>{planet.url}</th>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
};

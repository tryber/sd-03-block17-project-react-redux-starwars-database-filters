import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props) => {
  const { planetsList } = props;
  return (
    <tbody>
      {planetsList.map((planets) => (
        <tr key={planets.name}>
          <th>{planets.name}</th>
          <th>{planets.rotation_period}</th>
          <th>{planets.orbital_period}</th>
          <th>{planets.diameter}</th>
          <th>{planets.climate}</th>
          <th>{planets.gravity}</th>
          <th>{planets.terrain}</th>
          <th>{planets.surface_water}</th>
          <th>{planets.population}</th>
          <th>{planets.films}</th>
          <th>{planets.created}</th>
          <th>{planets.edited}</th>
          <th>{planets.url}</th>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

TableBody.propTypes = {
  planetsList: PropTypes.arrayOf(
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

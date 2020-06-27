import React from 'react';
import PropTypes from 'prop-types';

const headers = [
  'Name',
  'Rotation',
  'Orbital',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface',
  'Population',
  'films',
  'created',
  'edited',
  'url',
];

export default function TableData({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((el) => (
            <th key={el}>{el}</th>
          ))}
        </tr>
      </thead>
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
            <td>{planet.films}</td>
            <td>{planet.population}</td>
            <td>{planet.created}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableData.propTypes = {
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

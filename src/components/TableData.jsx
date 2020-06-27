import React from 'react';

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

export default function TableData({ planets }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((el) => (
              <th key={el}>{el}</th>
            ))}
          </tr>
          <tbody>
            {/* {planets.map((planet) => (
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
            ))} */}
          </tbody>
        </thead>
      </table>
    </div>
  );
}

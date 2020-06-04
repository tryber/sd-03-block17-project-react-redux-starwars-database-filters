import React from 'react';

export default function CreateTable(props) {
  const { data } = props;
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
  ]
  return (
    <table>
      <thead>
        {headers.map((title) =>
          <th key={title}>{title}</th>
        )}
      </thead>
      <tbody>
        {data && data.map((planet, i) =>
          <tr key={`${planet.name} row`} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films.map((film) => <p key={film}>{film}</p>)}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>,
        )}
      </tbody>
    </table>
  );
}

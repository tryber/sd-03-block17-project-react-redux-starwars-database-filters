import React from 'react';

const TableWithData = (props) => {
  const { data } = props;
  console.log(`data${data}`);
  return (
    <div>
      <tbody>
        {data.map((planet) => (
          <tr key={planet.name}>
            <th>{planet.name}</th>
            <th>{planet.diameter}</th>
            <th>{planet.population}</th>
            <th>{planet.rotation_period}</th>
            <th>{planet.orbital_period}</th>
            <th>{planet.climate}</th>
            <th>{planet.gravity}</th>
            <th>{planet.terrain}</th>
            <th>{planet.surface_water}</th>
          </tr>
        ))}
      </tbody>
    </div>
  );
};


export default TableWithData;

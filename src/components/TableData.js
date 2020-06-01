import React from 'react';
import { connect } from 'react-redux';

const TableData = (props) => {
  const { dataSwPlanets } = props;
  return (
    <tbody>
      {dataSwPlanets.map((e) => (
        <tr key={e.name}>
          <th>{e.name}</th>
          <th>{e.rotation_period}</th>
          <th>{e.orbital_period}</th>
          <th>{e.diameter}</th>
          <th>{e.climate}</th>
          <th>{e.gravity}</th>
          <th>{e.terrain}</th>
          <th>{e.surface_water}</th>
          <th>{e.population}</th>
        </tr>
      ))}
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  dataSwPlanets: state.apiSWReducer.data,
});

export default connect(mapStateToProps)(TableData);

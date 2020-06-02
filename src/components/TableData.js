import React from 'react';
import { connect } from 'react-redux';

const TableData = (props) => {

  const { dataSw } = props;
  // console.log(dataSW);
  return (
    <tbody>
      {dataSw.map((planets) => (
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
        </tr>
      ))}
    </tbody>
  );
};

// const mapStateToProps = (state) => ({
//   dataSw: state.apiSWReducer.data,
// });

export default TableData;

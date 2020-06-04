import React from 'react';
import PropTypes from 'prop-types';

const TableData = (props) => {
  const { dataSw } = props;
  return (
    <tbody>
      {dataSw.map((planets) => (
        <tr key={planets.name}>
          <td>{planets.name}</td>
          <td>{planets.rotation_period}</td>
          <td>{planets.orbital_period}</td>
          <td>{planets.diameter}</td>
          <td>{planets.climate}</td>
          <td>{planets.gravity}</td>
          <td>{planets.terrain}</td>
          <td>{planets.surface_water}</td>
          <td>{planets.population}</td>
          <td>{planets.films}</td>
          <td>{planets.created}</td>
          <td>{planets.edited}</td>
          <td>{planets.url}</td>
        </tr>
      ))}
    </tbody>
  );
};

// const mapStateToProps = (state) => ({
//   dataSw: state.apiSWReducer.data,
// });

export default TableData;

TableData.propTypes = {
  dataSw: PropTypes.arrayOf(PropTypes.object),
};

TableData.defaultProps = {
  dataSw: [],
};

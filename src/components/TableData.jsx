import React from 'react';
import { connect } from 'react-redux';

const TableData = (props) => {
  const { data } = props;
  return data.map((planet, i) => {
    return (
      <tr key={planet.name} className={i % 2 === 0 ? 'Par' : 'Impar'}>
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
    );
  });
};

const mapStateToProps = (state) => ({
  data: state.requestAPI.data,
});

export default connect(mapStateToProps)(TableData);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import TableLine from './TableLine';

const Table = ({ data, isFetching }) => {
  const filter = () => {
    console.log(data);
    return data.reduce((acc, planet) => {
      acc.push(<TableLine planet={planet} />);
      return acc;
    }, []);
  };

  if (isFetching) return <p>loading</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>{filter()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Table);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const Table = ({ data, loading }) => {
  if (loading) return <p>loading...</p>;
  return (
    <table>
      <tbody>
        <tr className="table-headers">
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
        <TableRow planet={data} />
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  loading: state.apiReducer.loading,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Table);

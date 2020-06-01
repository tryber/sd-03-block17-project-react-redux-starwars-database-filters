import React from 'react';
import { connect } from 'react-redux';
import ApiRequestComponent from './ApiRequestComponent';
import TableData from './TableData';

const Table = () => {
  return (
    <div>
      <ApiRequestComponent />
      <table>
        <tbody>
          <tr className="table-headers">
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
          </tr>
        </tbody>
        <TableData />
      </table>
    </div>
  );
};

export default Table;

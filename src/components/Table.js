import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiRequestComp from './ApiRequestComp';
import TableWithData from './TableWithData';

export class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <ApiRequestComp />
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
        <TableWithData data={data} />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
});
export default connect(mapStateToProps)(Table);

import React from 'react';
import { connect } from 'react-redux';
// import data from '../store/data';
import './Layout/Table.css';

import FilterPlanets from './FilterPlanets';
import TableData from './TableData';
import DispatchStore from '../services/dispatchStore';

class Table extends React.Component {

  tableForm = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation</th>
          <th>Orbital</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
    );
  }

  render() {
    return (
      <div className="container">
        <h1 className="titleTable">Star Wars World</h1>
        <div className="TabelaProdutos">
          <DispatchStore />
          <table>
            {this.tableForm()}
            <tbody>
              <TableData />
            </tbody>
          </table>
        </div>
        <div className="barFilter">
          <FilterPlanets />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.requestAPI.isFetching,
});

export default connect(mapStateToProps)(Table);

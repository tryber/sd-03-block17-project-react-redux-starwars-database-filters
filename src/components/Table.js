import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Url</th>
            </tr>
          </thead>
          <tbody>
            <td>Dado</td>
            <td>Dado</td>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

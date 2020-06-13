import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          <thead>
            <tr>
              <th>Coluna 1</th>
              <th>Coluna 2</th>
            </tr>
          </thead>
          <tbody>
            <td>Dado 1</td>
            <td>Dado 2</td>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

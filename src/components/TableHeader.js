import React, { Component } from 'react';

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Names</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Water Surface</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

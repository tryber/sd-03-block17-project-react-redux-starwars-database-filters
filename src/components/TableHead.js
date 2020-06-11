import React from 'react';

class TableHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th key="Name">Name</th>
          <th key="Rotation">Rotation Period</th>
          <th key="Orbital">Orbital Period</th>
          <th key="Diameter">Diameter</th>
          <th key="Climate">Climate</th>
          <th key="Gravity">Gravity</th>
          <th key="Terrain">Terrain</th>
          <th key="Surface">Surface Water</th>
          <th key="Population">Population</th>
          <th key="Films">Films</th>
          <th key="Created">Created</th>
          <th key="Edited">Edited</th>
          <th key="URL">URL</th>
        </tr>
      </thead>
    );
  }
}

export default TableHead;

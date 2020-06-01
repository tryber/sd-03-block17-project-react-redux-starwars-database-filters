import React from 'react';

const TableRow = ({ planet, headers }) => (
  <tr>
    {headers.map((feature) => (<td key={`${planet.name}-${feature}`}>{planet[feature]}</td>))}
  </tr>
);

export default TableRow;

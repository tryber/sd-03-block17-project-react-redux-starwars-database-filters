import React from 'react';
import PropTypes from 'prop-types';
import planetShape from '../services/planetShape';

const TableRow = ({ planet, properties }) => (
  <tr>
    {properties.map((feature) => (
      <td key={`${planet.name}-${feature}`}>{planet[feature]}</td>
    ))}
  </tr>
);

TableRow.propTypes = {
  planet: PropTypes.planetShape().isRequired,
  properties: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default TableRow;

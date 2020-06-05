import React from 'react';
import PropTypes from 'prop-types';
import { planetShape } from '../services/constants';

const generateTDStyle = (isClassic) => (
  isClassic ? {} : ({
    fontSize: '1.3em',
    paddingLeft: '50%',
    position: 'relative',
    wordWrap: 'break-word',
    display: 'block',
  })
);

const generateTRStyle = (isClassic) => {
  return isClassic ? {} : ({ display: 'block', flexBasis: '60%' });
};

const TableRow = ({ planet, properties, isClassic }) => (
  <tr style={generateTRStyle(isClassic)}>
    {properties.map((feature) => (
      <td
        style={generateTDStyle(isClassic)}
        key={`${planet.name}-${feature}`}
      >
        {planet[feature]}
      </td>
    ))}
  </tr>
);

TableRow.propTypes = {
  planet: PropTypes.shape(planetShape()).isRequired,
  properties: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isClassic: PropTypes.bool.isRequired,
};

export default TableRow;

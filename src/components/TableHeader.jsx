import React from 'react';
import PropTypes from 'prop-types';

import * as constants from '../services/constants';
import './TableHeader.css';

const generateStyle = (isClassic) => (
  isClassic ? {} : ({
    display: 'block',
    flexBasis: '60%',
    left: -9999,
    position: 'absolute',
    top: -9999,
  })
);

const TableHeader = ({ headers, isClassic }) => (
  <thead>
    {
      <tr style={generateStyle(isClassic)}>
        {headers.map((title) => (
          <th
            className="table-header"
            style={isClassic ? {} : { left: -9999, position: 'absolute', top: -9999 }}
            key={title}
          >
            {constants.frendlyUser(title)}
          </th>
        ))}
      </tr>
    }
  </thead>
);

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isClassic: PropTypes.bool.isRequired,
};

export default TableHeader;

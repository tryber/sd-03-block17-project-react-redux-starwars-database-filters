import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ headers }) => (
  <thead>
    {
      <tr>
        {headers.map((title) => <th key={title}>{title}</th>)}
      </tr>
    }
  </thead>
);

TableHeader.propTypes = { headers: PropTypes.arrayOf(PropTypes.string).isRequired };

export default TableHeader;

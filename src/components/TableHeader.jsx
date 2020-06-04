import React from 'react';
import PropTypes from 'prop-types';

import './TableHeader.css';

const TableHeader = ({ headers }) => (
  <thead>
    {
      <tr>
        {headers.map((title) => <th className="table-header" key={title}>{title}</th>)}
      </tr>
    }
  </thead>
);

TableHeader.propTypes = { headers: PropTypes.arrayOf(PropTypes.string).isRequired };

export default TableHeader;

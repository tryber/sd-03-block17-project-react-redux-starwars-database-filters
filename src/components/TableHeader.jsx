import React from 'react';
import PropTypes from 'prop-types';

import * as constants from '../services/constants';
import './TableHeader.css';


const TableHeader = ({ headers }) => (
  <thead>
    {
      <tr>
        {headers.map((title) => (
          <th className="table-header" key={title}>{constants.frendlyUser(title)}</th>)
        )}
      </tr>
    }
  </thead>
);

TableHeader.propTypes = { headers: PropTypes.arrayOf(PropTypes.string).isRequired };

export default TableHeader;

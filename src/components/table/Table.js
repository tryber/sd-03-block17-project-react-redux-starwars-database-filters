import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ data }) => (
  <div>
    <table>
      <TableHeader />
      <TableRow data={data} />
    </table>
  </div>
);

Table.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Table;

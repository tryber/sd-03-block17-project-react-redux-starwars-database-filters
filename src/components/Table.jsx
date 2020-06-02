import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ data }) => (
  <div>
    <table>
      <TableHeader />
      <TableBody results={data} />
    </table>
  </div>
);

export default Table;

Table.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };

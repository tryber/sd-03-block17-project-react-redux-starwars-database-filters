import React from 'react';
import PropTypes from 'prop-types';
import Tbody from './Tbody';
import Thead from './Thead';

const Table = ({ data }) => (
  <div>
    <h1>Coisas</h1>
    <table>
      <Thead />
      <Tbody data={data} />
    </table>
  </div>
);

export default Table;

Table.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };

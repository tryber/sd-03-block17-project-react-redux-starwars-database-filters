import React from 'react';
import propTypes from 'prop-types';

const TableHeaders = ({
  heads,
}) => <tr>{heads.map((head) => head !== 'residents' && <th key={head}>{head}</th>)}</tr>;
export default TableHeaders;

TableHeaders.propTypes = {
  heads: propTypes.arrayOf(propTypes.string).isRequired,
};

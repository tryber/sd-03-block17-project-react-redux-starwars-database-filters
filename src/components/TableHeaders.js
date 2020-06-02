import React from 'react';
import propTypes from 'prop-types';

const TableHeaders = ({ heads }) => <thead>{heads.map((head) => <th>{head}</th>)}</thead>;
export default TableHeaders;

TableHeaders.propTypes = {
  heads: propTypes.arrayOf(propTypes.string).isRequired,
};

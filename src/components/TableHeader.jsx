import React from 'react';

const TableHeader = ({ headers }) => (
  <thead>
    {<tr>{headers.map((title) => <th key={title}>{title}</th>)}</tr>}
  </thead>
);

export default TableHeader;

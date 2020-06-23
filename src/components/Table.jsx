import React from 'react';
import FilterTable from './filterTable';

const Table = (props) => (
  <main>
    <FilterTable />
    <h3>StarWars Datatable with Filters</h3>
    <p>{props.results}</p>
  </main>
);

export default Table;

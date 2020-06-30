import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumberValues from './FilterByNumberValues';
import OrderColumns from './OrderColumns';
import RemoveFilters from './RemoveFilters';

const SearchBar = () => (
  <div>
    <FilterByName />
    <FilterByNumberValues />
    <OrderColumns />
    <RemoveFilters />
  </div>
);

export default SearchBar;

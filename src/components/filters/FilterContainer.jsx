import React from 'react';
import FilterByNameBar from './FilterByNameBar';
import FilterByValuesBar from './FilterByValuesBar';
import SelectedFilters from './SelectedFilters';
import SortColumnsFilter from './SortColumnsFilter';

function FilterContainer() {
  return (
    <div>
      <FilterByNameBar />
      <div>
        <FilterByValuesBar />
      </div>
      <div>
        <SelectedFilters />
      </div>
      <div>
        <SortColumnsFilter />
      </div>
    </div>
  );
}

export default FilterContainer;

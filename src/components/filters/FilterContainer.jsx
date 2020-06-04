import React from 'react';
import PropTypes from 'prop-types';
import FilterByNameBar from './FilterByNameBar';
import FilterByValuesBar from './FilterByValuesBar';
import SelectedFilters from './SelectedFilters';

function FilterContainer({ onChange }) {
  return (
    <div>
      <FilterByNameBar onChange={onChange} />
      <div>
        <FilterByValuesBar />
      </div>
      <div>
        <SelectedFilters />
      </div>
    </div>
  );
}

FilterContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterContainer;

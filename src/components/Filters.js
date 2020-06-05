import React from 'react';
import PropTypes from 'prop-types';
import FilterByNameInput from './allfilters/FilterByNameInput';
import FilterByValuesInput from './allfilters/FilterByValuesInput';
import SelectedFilters from './allfilters/SelectedFilters';
import SortColumns from './allfilters/SortColumns';

function FilterContainer({ onChange }) {
  return (
    <div>
      <FilterByNameInput onChange={onChange} />
      <div>
        <FilterByValuesInput />
      </div>
      <div>
        <SelectedFilters />
      </div>
      <div>
        <SortColumns />
      </div>
    </div>
  );
}

FilterContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterContainer;

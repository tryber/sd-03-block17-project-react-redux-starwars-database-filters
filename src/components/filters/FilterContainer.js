import React from 'react';
import PropTypes from 'prop-types';
import FilterByNameInput from './FilterByNameInput';

function FilterContainer({ onChange }) {
  return (
    <div>
      <FilterByNameInput onChange={onChange} />
    </div>
  );
}

FilterContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterByNameInput;

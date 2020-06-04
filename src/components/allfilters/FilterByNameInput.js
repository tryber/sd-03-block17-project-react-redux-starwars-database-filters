import React from 'react';
import PropTypes from 'prop-types';


const FilterByNameInput = ({ onChange }) => (
  <div>
    <h2>Pesquisar um planeta</h2>
    <input
      type="text"
      name="filter-by-name"
      id="filter-by-name"
      data-testid="name-filter"
      placeholder="Nome do planeta"
      onChange={onChange}
    />
  </div>
);

FilterByNameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterByNameInput;

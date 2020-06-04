import React from 'react';
import PropTypes from 'prop-types';


const FilterByNameBar = ({ onChange }) => (
  <div>
    <h2>Selecione um planeta</h2>
    <input
      type="text"
      name="filter-by-name"
      id="filter-by-name"
      data-testid="name-filter"
      placeholder="Digite o nome do planeta"
      onChange={onChange}
    />
  </div>
);

FilterByNameBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterByNameBar;

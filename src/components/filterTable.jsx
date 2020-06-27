import React from 'react';
// import PropTypes from 'prop-types';
// pode gerar dinamicos esses aqui

const columns = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

// const comparisons = ['', 'maior que', 'igual a', 'menor que'];

export default function filterTable() {
  return (
    <div className="filter-container">
      <select data-testid="column-filter">
        {columns.map((list) => (
          <option key={list}>{list}</option>
        ))}
      </select>
      <div>
        <select name="comparision-filter" id="comparision-filter" data-testid="comparision-filter">
          <option value="">Maior que</option>
          <option value="">Menor que</option>
          <option value="">Igual a</option>
        </select>
      </div>
      <div>
        <input type="number" data-testid="value-filter" />
      </div>
      <div>
        <button data-testid="button-filter">Filter</button>
      </div>
      <div>
        <input
          id="name-filter"
          data-testid="name-filter"
          placeholder="planet name here..."
          type="text"
        />
        <label htmlFor="name-filter">Search Planets</label>
      </div>
    </div>
  );
}

// filterTable.propTypes = {};
// {
// <select name="column-filter" id="column-filter" data-testid="column-filter">
//   <option value="population">population</option>
//   <option value="orbital_period">orbital_period</option>
//   <option value="diameter">diameter</option>
//   <option value="rotation_period">rotation_period</option>
//   <option value="surface_water">surface_water</option>
// </select>
// }

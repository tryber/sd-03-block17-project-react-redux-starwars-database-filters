import React from 'react';

import SearchBox from './SearchBox';
import NumFilter from './NumFilter';

const columnOptions = ['orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const comparisonOptions = ['Maior que', 'Menor que', 'Igual a'];

const FilterBar = () => (
  <section>
    <SearchBox />
  <NumFilter columnOptions={columnOptions} comparisonOptions={comparisonOptions} />
  </section>
);

export default FilterBar;

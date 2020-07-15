import React from 'react';
import RemoveFilter from './Filter/RemoveFilter';
import FilterOrder from './Filter/Order';
import InputText from './Filter/InputText';
import ByNumericValues from './Filter/ByNumericValues';

function Filters() {
  return (
    <div>
      <InputText />
      <FilterOrder />
      <ByNumericValues />
      <RemoveFilter />
    </div>
  );
}

export default Filters;

import React, { Component } from 'react';

export class FilterNumeric extends Component {
  render() {
    return (
      <div>
        <select data-testid="column-filter" name="filter">
          <option value=" ">Selecione Uma Opção </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" name="comparation">
          <option value=" ">Selecione Uma Opção </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input type="number" placeholder="numeros" name="input-value" data-testid="value-filter" />
        <button type="button" data-testid="button-filter"> Filtrar</button>
      </div>
    );
  }
}

export default FilterNumeric;

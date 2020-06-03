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
          <option value="Maior que">Maior que</option>
          <option value="Menor que">Menor que</option>
          <option value="diameter">Igual a</option>
        </select>

        <input type="number" placeholder="insira uma valor" name="input-value" />
        <button type="button" data-testid="button-filter"> Filtrar</button>
      </div>
    );
  }
}

export default FilterNumeric;

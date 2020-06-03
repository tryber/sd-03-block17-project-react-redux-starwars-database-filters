import React from 'react';
import './Layout/NavBar.css';

const sideBar = () => (
  <header className="header">
    <h1>Monkey Planets</h1>
    <nav className="menu">
      <ul>
        <li>Planets</li>
        <li>Start</li>
        <li>About</li>
        <li>Contats</li>
        <button
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
        <select data-testid="column-filter">
          <option>NodeName</option>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select data-testid="comparison-filter">
          <option>NodeName</option>
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
        />
      </ul>
    </nav>
  </header>
);

function NavBar() {
  return (
    <div>
      {sideBar()}
    </div>
  );
}

export default NavBar;

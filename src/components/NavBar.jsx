import React from 'react';
import './Layout/NavBar.css';

function NavBar() {
  return (
    <div>
      <header className="header">
        <h1>Monkey Planets</h1>
        <nav className="menu">
          <ul>
            <li>Planets</li>
            <li>Start</li>
            <li>About</li>
            <li>Contats</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="jumbotron">
        <h1 className="display-3">Star Wars Filterable Data</h1>
        <p className="lead">
          This is a simple table that displays data obtained from
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://swapi-trybe.herokuapp.com/documentation"
          >
            SWAPI
          </a>
        </p>
        <hr />
        <p>The info can be filtered by the inputs below</p>
      </header>
    );
  }
}

export default Header;

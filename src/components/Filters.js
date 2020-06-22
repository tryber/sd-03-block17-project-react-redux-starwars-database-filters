import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <div>
        <h3>Filtrar resultados</h3>
        <input type="text" placeholder="Digite o nome de um Planeta"></input>
      </div>
    )
  }
}

export default Filters;
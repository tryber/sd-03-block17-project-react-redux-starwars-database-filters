import React from 'react';
import { fetchPlanets } from '../actions';
import { connect } from 'react-redux';

class Table extends React.Component {
  componentDidMount() {
    const { getStarWarsPlanets } = this.props;
    getStarWarsPlanets();
  }
  
  renderTable() {
    const { data } = this.props;
    return (
      data.map(planeta => 
        <tr key={planeta.name}>
        <td>{planeta.name}</td>
        <td>{planeta.population}</td>
        <td>{planeta.climate}</td>
        <td>{planeta.created}</td>
        <td>{planeta.diameter}</td>
        <td>{planeta.edited}</td>
        <td>{planeta.orbital_period}</td>
        <td>{planeta.rotacional_period}</td>
        <td>{planeta.terrain}</td>
        <td>{planeta.surface_water}</td>
        <td>{planeta.films}</td>
        <td>{planeta.gravity}</td>
        <td>{planeta.url}</td>
      </tr>
      )
    );
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>População</th>
              <th>Clima</th>
              <th>Criado</th>
              <th>Diametro</th>
              <th>Editado</th>
              <th>Período Orbital</th>
              <th>Período Rotacional</th>
              <th>Terreno</th>
              <th>Superfície Aquática</th>
              <th>Filmes</th>
              <th>Gravidade</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getStarWarsPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';

class Table extends React.Component {
  componentDidMount() {
    const { getStarWarsPlanets } = this.props;
    getStarWarsPlanets();
  }

  renderHeaders() {
    return (
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
    );
  }
  renderTableTr() {
    const { data, filters: { filterByName } } = this.props;
    console.log(filterByName);
    return (
      data.map((planeta) =>
        <tr key={planeta.name}>
          <td>{planeta.name}</td>
          <td>{planeta.population}</td>
          <td>{planeta.climate}</td>
          <td>{planeta.created}</td>
          <td>{planeta.diameter}</td>
          <td>{planeta.edited}</td>
          <td>{planeta.orbital_period}</td>
          <td>{planeta.rotation_period}</td>
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
            {this.renderHeaders()}
          </thead>
          <tbody>
            {this.renderTableTr()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  getStarWarsPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  data: PropTypes.any.isRequired,
  getStarWarsPlanets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';

class Table extends React.Component {
  componentDidMount() {
    const { getStarWarsPlanets } = this.props;
    getStarWarsPlanets();
  }

  renderTableTr() {
    const { dataFiltered } = this.props;
    dataFiltered.map((test) => console.log(test.films.length));
    return (
      dataFiltered.map((planet) => (
        <tr key={planet.name}>
          <td className="table-active">{planet.name}</td>
          <td>{planet.population}</td>
          <td className="table-active">{planet.climate}</td>
          <td>{planet.created.slice(0, 7)}</td>
          <td className="table-active">{planet.diameter}</td>
          <td>{planet.edited.slice(0, 7)}</td>
          <td className="table-active">{planet.orbital_period}</td>
          <td>{planet.rotation_period}</td>
          <td className="table-active">{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td className="table-active">{planet.films.length}</td>
          <td>{planet.gravity}</td>
          <td className="table-active">
            <a href={planet.url} className="btn btn-outline-primary"> Link</a>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr className="table-primary">
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
            {this.renderTableTr()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataFiltered: state.dataFiltered,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  getStarWarsPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  dataFiltered: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    gravity: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  getStarWarsPlanets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

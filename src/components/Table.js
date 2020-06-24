import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchStarWars } from '../actions';
import TableHead from './TableHead';
import Filters from './Filters';

class Table extends Component {
  componentDidMount() {
    const { getStarWarsPlanetsData } = this.props;
    getStarWarsPlanetsData();
  }

  render() {
    const { data, nameToData } = this.props;

    const getFilteredName = data.filter((planet) => planet.name.includes(nameToData));

    return (
      <div>
        <h1 className="table-title" >StarWars Datatable with Filters</h1>
        <Filters />
        <table>
          <TableHead />
          <tbody>
            {getFilteredName.map((planet) => (
              <tr key="planet.name">
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films.map((film) => <p key={film}>{film}</p>)}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.starWars.data,
  nameToData: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getStarWarsPlanetsData: () => dispatch(fetchStarWars()),
});

Table.propTypes = {
  getStarWarsPlanetsData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    films: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  nameToData: PropTypes.string,
};

Table.defaultProps = {
  data: null,
  nameToData: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

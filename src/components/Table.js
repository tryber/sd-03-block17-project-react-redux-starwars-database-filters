import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchStarWars } from '../actions';
import TableHead from './TableHead';
import Filters from './Filters';

function switchComparison(column, comparison, value, planet) {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
}

function ascOrder(columnA, columnB) {
  if (columnA > columnB) return 1;
  return -1;
}

function descOrder(columnA, columnB) {
  if (columnA < columnB) return 1;
  return -1;
}

class Table extends Component {

  componentDidMount() {
    const { getStarWarsPlanetsData } = this.props;
    getStarWarsPlanetsData();
  }

  getFilteredValues() {
    const { getFilterByNumber } = this.props;
    if (getFilterByNumber) {
      return getFilterByNumber.reduce(
        (acc, { column, comparison, value }) =>
          acc.filter((planet) => switchComparison(column, comparison, value, planet)),
        this.getFilteredName(),
      );
    }
    return this.getFilteredName();
  }

  getFilteredName() {
    const { data, name } = this.props;
    return data.filter((planet) => planet.name.includes(name));
  }

  sortPlanets(planetA, planetB) {
    const { order } = this.props;

    let columnA = planetA[order.column.toLowerCase()];
    let columnB = planetB[order.column.toLowerCase()];

    if (order.column.toLowerCase() !== 'name') {
      columnA = Number(columnA);
      columnB = Number(columnB);
    }

    switch (order.sort) {
      case 'ASC':
        return ascOrder(columnA, columnB);
      case 'DESC':
        return descOrder(columnA, columnB);
      default:
        return 0;
    }
  }

  render() {
    return (
      <div>
        <h1 className="table-title" >StarWars Datatable with Filters</h1>
        <Filters />
        <table>
          <TableHead />
          <tbody>
            {this.getFilteredValues()
            .sort((planetA, planetB) => this.sortPlanets(planetA, planetB))
            .map((planet) => (
              <tr key={planet.name}>
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
  name: state.filters.filterByName.name,
  getFilterByNumber: state.filters.filterByNumericValues,
  order: state.filters.order,
});

const mapDispatchToProps = (dispatch) => ({
  getStarWarsPlanetsData: () => dispatch(fetchStarWars()),
});

Table.propTypes = {
  getStarWarsPlanetsData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  name: PropTypes.string,
  getFilterByNumber: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  order: PropTypes.objectOf(
    PropTypes.shape({
      column: PropTypes.string,
      sort: PropTypes.string,
    }),
  ).isRequired,
};

Table.defaultProps = {
  data: null,
  name: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

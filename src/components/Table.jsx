/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPlanets, { filterByName } from '../redux/actions/actions';

const tableHead = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  handleNameFilter(text) {
    const { filterByName } = this.props;
    filterByName(text);
  }

  // console.log(
  //   data
  //     .sort((a, b) => b.rotation_period - a.rotation_period)
  //     .filter((planet) => planet.name.length > 7),
  // );
  // console.log(
  //   data.filter((planet) => planet.name[1].toLowerCase().includes('a')),
  // );

  static renderTable(data) {
    return data.map((planet) => (
      <tr key={planet.url}>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ));
  }

  render() {
    const { name, data } = this.props;
    const filteredName = data.filter((planet) => planet.name.toLowerCase().includes(name));
    return (
      <div>
        <input
          data-testid="name-filter"
          onChange={(event) => this.handleNameFilter(event.target.value)}
        />
        <table>
          <thead>
            <tr>
              {tableHead.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>{Table.renderTable(filteredName)}</tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
  filterByName: (name) => dispatch(filterByName(name)),
});

const mapStateToProps = ({
  getPlanetsReducer: {
    data,
    filters: {
      filterByName: { name },
    },
  },
}) => ({
  data,
  name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

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
  // console.log(
  //   data
  //     .sort((a, b) => b.rotation_period - a.rotation_period)
  //     .filter((planet) => planet.name.length > 7),
  // );
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

  static renderLoading() {
    return <p>LOADING...</p>;
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  handleNameFilter(text) {
    const { filterName } = this.props;
    filterName(text);
  }

  render() {
    const { name, data, isFetching } = this.props;
    const filteredName = data.filter((planet) => planet.name.toLowerCase().includes(name));
    return isFetching ? (
      Table.renderLoading()
    ) : (
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
  filterName: (name) => dispatch(filterByName(name)),
});

const mapStateToProps = ({
  data,
  isFetching,
  filters: {
    filterByName: { name },
  },
}) => ({
  data,
  name,
  isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

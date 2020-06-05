/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPlanets from '../redux/actions/actions';

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
    const { data, dispatch } = this.props;
    dispatch(fetchPlanets(data));
  }

  renderTable() {
    const { data } = this.props;
    // console.log(
    //   data
    //     .sort((a, b) => a.rotation_period - b.rotation_period)
    //     .filter((planet) => planet.name.length > 7),
    // );

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
    return (
      <div>
        <table>
          <thead>
            <tr>
              {tableHead.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ getPlanetsReducer: { data } }) => ({
  data,
});

export default connect(mapStateToProps)(Table);

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Table extends Component {
  renderTableBody() {
    const { results } = this.props.value.data;
    return results.map((element) => (
      <tr>
        <td >{element.name}</td>
        <td >{element.rotation_period}</td>
        <td >{element.orbital_period}</td>
        <td >{element.diameter}</td>
        <td >{element.climate}</td>
        <td >{element.gravity}</td>
        <td >{element.terrain}</td>
        <td >{element.surface_water}</td>
        <td >{element.population}</td>
        <td >{element.films}</td>
        <td >{element.created}</td>
        <td >{element.edited}</td>
        <td >{element.url}</td>
      </tr>
    ));
  }

  render() {
    const { results } = this.props.value.data;
    const headers = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
    return (
      <div>
        {results.length === 1
          ? (<h1> {results[0]}</h1>) : (
            <div> <p> Table </p>
              <table>
                <thead>
                  <tr>
                    {headers.map((element) => <th key={element}>{element}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {this.renderTableBody()}
                </tbody>
              </table>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ value: state });

Table.defaultsProps = {
  data: {},
  results: [],

};

export default connect(mapStateToProps)(Table);

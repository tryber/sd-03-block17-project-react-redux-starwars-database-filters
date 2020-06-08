import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Table extends Component {
  this.filtraData = this.filtraData.bind(this);
  this.filterDataByName = this.filterDataByName.bind(this);
  this.renderTableBody = this.renderTableBody.bind(this);
  this.fetchUrl = this.fetchUrl.bind(this);
}

componentDidMount() {
  this.fetchUrl();
}

fetchUrl() {
  const { request } = this.props;
  request();
  console.log(this.props.value)
}

retornaSign(comparison) {
  let comparisonSignal;
  if (comparison === 'maior que') {
    comparisonSignal = 0;
    return comparisonSignal;
  } if (comparison === 'menor que') {
    comparisonSignal = 1;
    return comparisonSignal;
  } if (comparison === 'igual a') {
    comparisonSignal = 2;
    return comparisonSignal;
  }
  return null;
}

filtraData(comparisonSignal, results, column, value, name) {
  if (comparisonSignal === 0) {
    return results.filter((element) => element[column] > value);

  } if (comparisonSignal === 1) {
    return results.filter((element) => element[column] < value);
  } if (comparisonSignal === 2) {
    return results.filter((element) => element[column] === value);
  } if (name !== ' ') {
    console.log("filtername")
   return this.filterDataByName(name, results)
  } if (comparisonSignal = null && name === ' ') {
    return results;
  }
  return results;
}

filterDataByName(filtername, results) {
      return results.filter((element) => {
      const lowerName = element.name.toLowerCase();
      return lowerName.includes(filtername);
    })
}

  renderTableBody(filtername, filterNumb) {
    const { value: { data } } = this.props;
    const { results } = data;
    return results.map((element) => (
        <td>{element.name}</td>
        <td>{element.rotation_period}</td>
        <td>{element.orbital_period}</td>
        <td>{element.diameter}</td>
        <td>{element.climate}</td>
        <td>{element.gravity}</td>
        <td >{element.terrain}</td>
        <td >{element.surface_water}</td>
        <td >{element.population}</td>
        <td >{element.films}</td>
        <td >{element.created}</td>
        <td >{element.edited}</td>
        <td>{element.url}</td>
      </tr>
    ));
  }

  renderTableBodyFiltered() {
    const { value: { filters: { filterByName: { filteredPlanets } } } } = this.props;
    return filteredPlanets[0].map((element) => (
      <tr key={element.name}>
        <td>{element.name}</td>
        <td>{element.rotation_period}</td>
        <td>{element.orbital_period}</td>
        <td>{element.diameter}</td>
        <td>{element.climate}</td>
        <td>{element.gravity}</td>
        <td >{element.terrain}</td>
        <td >{element.surface_water}</td>
        <td >{element.population}</td>
        <td >{element.films}</td>
        <td >{element.created}</td>
        <td >{element.edited}</td>
        <td>{element.url}</td>
      </tr>
    ));
  }

  render() {
    console.log(this.props.value.filters);
    const { value: { data } } = this.props;
    const { value: { filters: { filterByName: { filteredPlanets } } } } = this.props;
    const { results } = data;
    if(this.filteredPlanets === undefined ) {
    this.filteredPlanets = results;
    console.log(this.filteredPlanets)}
    const headers = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
    return (
      <div>
        {results.length === 1
          ? (
            <h1>
              {results[0]}
            </h1>
          ) : (
            <div>
              <p> Table </p>
              <table>
                <thead>
                  <tr>
                    {headers.map((element) => <th key={element}>{element}</th>)}

                  </tr>
                </thead>
                <tbody>
                  {filteredPlanets.length === 0
                    ? this.renderTableBody()
                    : this.renderTableBodyFiltered()}
                </tbody>
              </table>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ value: state });

Table.propTypes = {
  value: PropTypes.instanceOf(Object),
};

Table.defaultProps = {
  value: {},
};

export default connect(mapStateToProps)(Table);
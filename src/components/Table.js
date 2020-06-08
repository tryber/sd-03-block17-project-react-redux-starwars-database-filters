import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, filterPlanet } from '../action/index';

export class Table extends Component {
constructor(props){
  super(props);
  this.retornaSign = this.retornaSign.bind(this);
  this.filtraData = this.filtraData.bind(this);
  this.filterDataByName = this.filterDataByName.bind(this);
  this.renderTableBody = this.renderTableBody.bind(this);
  this.fetchUrl = this.fetchUrl.bind(this);
  this.atualiza_estado = this.atualiza_estado.bind(this);
  this.state = {PlanetasFiltrados : []};
}

componentDidMount() {
  this.fetchUrl();
}

atualiza_estado(state) {
 this.setState({PlanetasFiltrados: state})
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
   const resultado = this.filterDataByName(name, results);
   console.log(resultado);
   this.atualiza_estado(resultado);
  } if (comparisonSignal = null && name === ' ') {
    return results;
  }
  return results;
}

filterDataByName(filtername, results) {
    if(results.length === 1 ) {
      console.log('Sem parametros para filtrar')
    } else {
      return results.filter((element) => {
        const lowerName = element.name.toLowerCase();
        return lowerName.includes(filtername);
      })
    }      
}

  renderTableBody(filtername, filterNumb) {
    const { value: { data } } = this.props;
    const { results } = data;
     return filterNumb.filterByNumericValues.map((element) => {
      const signal = this.retornaSign(element.comparison);
      return  this.filtraData(signal, results, element.column, element.value, filtername);
    });
  }

  render() {
    console.log(this.props.value.filters);
    const { value: { data } } = this.props;
    const { value: { filters: { filterByName: { name } } } } = this.props;
    const { value: { filters } } = this.props;
    const { results } = data;
    this.renderTableBody(name, filters) ;
    const headers = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
    return (
      <div>
         <table>
                <thead>
                  <tr>
                    {headers.map((element) => <th key={element}>{element}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {results.map((element) => (
          <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
         </tr>))}
             </tbody>
              </table>
            </div>
 )}}

const mapStateToProps = (state) => ({ value: state });

const mapDispatchToProps = (dispatch) => ({
  request: (e) => dispatch(fetchData(e)),
  filter: (e) => dispatch(filterPlanet(e)),
});

Table.propTypes = {
  value: PropTypes.instanceOf(Object),
  request: PropTypes.func,
};

Table.defaultProps = {
  value: {},
  request: PropTypes.func,
};

export default connect(mapStateToProps,mapDispatchToProps)(Table);

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Table extends Component {
constructor(props){
  super(props);
  this.retornaSign = this.retornaSign.bind(this);
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


filtraData(comparisonSignal, results, column, value) {
  console.log(comparisonSignal, results, column, value, "METODO_FILTRADATA")
  if (comparisonSignal === 0) {
    return results.filter((element) => element[column] > value);
  } if (comparisonSignal === 1) {
    return results.filter((element) => element[column] < value);
  } if (comparisonSignal === 2) {
    return results.filter((element) => element[column] === value);
  }
  return null;
}



  renderTableBody(filtername, filterNumb) {
    const { value: { data } } = this.props;
    const { results } = data;
    console.log(results, "COMPARISONSIGNAL");
    filterNumb.filterByNumericValues.map((element) => {
      const signal = this.retornaSign(element.comparison);
      console.log(signal,'signal');
      console.log(this.filtraData(signal, results, element.column, element.value), "return ");
    });
     if (document.getElementsByName('filter_name').value !== '') {
      return results.filter((element) => {
        const lowerName = element.name.toLowerCase();
        return lowerName.includes(filtername);
      }).map((element) => (
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
          </tr>
        ))
    
    return null;
  }}

  render() {
    const { value: { data } } = this.props;
    const { value: { filters: { filterByName: { name } } } } = this.props;
    const { value: { filters } } = this.props;
    const { results } = data;
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
                  {this.renderTableBody(name, filters)}
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

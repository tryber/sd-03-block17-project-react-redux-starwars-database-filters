import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Table extends Component {
  renderTableBody(filtername) {
    const { value: { data } } = this.props;
    const { results } = data;
   if(document.getElementsByName('filter_name').value !== '') {
    return results.filter((element) => {
      const lowerName = element.name.toLowerCase();
      return lowerName.includes(filtername);
    })
      .map((element) => (
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
      ));}
  }

  render() {
    const { value: { data } } = this.props;
    const { value: { filters: { filterByName: { name } } } } = this.props;
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
                  {this.renderTableBody(name)}
                  {console.log(this.props)}
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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../action/index';
import OrderColumn from '../helpers/functions';

export class Table extends Component {
  static renderizaTableBody(element) {
    return (
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
    );
  }

  render() {
    const { value } = this.props;
    const { filters } = value;
    const { filterByName, filterByNumericValues, order } = filters;
    const { data } = value;
    const planets = OrderColumn(data.results,
      filterByName.name,
      filterByNumericValues, order);
    const headers = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
    return (
      <div>
        <table>
          <thead data-testid="column-sort">
            <tr>
              {headers.map((element) => <th key={element}>{element}</th>)}
            </tr>
          </thead>
          <tbody>
            {planets !== undefined
              ? planets.map((element) => (
                Table.renderizaTableBody(element)))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ value: state });

const mapDispatchToProps = (dispatch) => ({
  request: (e) => dispatch(fetchData(e)),
});

Table.propTypes = {
  value: PropTypes.instanceOf(Object),
};

Table.defaultProps = {
  value: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

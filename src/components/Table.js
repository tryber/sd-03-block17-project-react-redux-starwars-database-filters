import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../action/index';
import filtraData from '../helpers/functions';

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

  constructor(props) {
    super(props);
    this.fetchUrl = this.fetchUrl.bind(this);
  }

  componentDidMount() {
    this.fetchUrl();
  }

  async fetchUrl() {
    const { request } = this.props;
    await request();
  }

  render() {
    const { value } = this.props;
    const { data } = value;
    let planets;
    if (value.isLoading !== undefined && value.isLoading === false) {
      if (value.filters.filterByName.name === undefined) {
        planets = data.results;
      } else {
        planets = filtraData(data.results,
          value.filters.filterByName.name,
          value.filters.filterByNumericValues);
      }
    }
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
  request: PropTypes.func,
};

Table.defaultProps = {
  value: {},
  request: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

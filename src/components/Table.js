import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchData } from '../actions/FetchActions';
import { nameFilter, filterDataByNumericValue } from '../filterFunctions/index';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  renderTableHead() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }
    return (
      <thead className="thead-dark">
        <tr>
          <th>Planet</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const { data, nameInput, filters } = this.props;
    const filteredData = filterDataByNumericValue(filters, nameFilter(data, nameInput));
    if (data.length === 0) return null;
    return (
      <tbody>
        {filteredData.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => (<a href={film} key={film}>{film}</a>))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>
              <a href={planet.url}>{planet.url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        {this.renderTableHead()}
        {this.renderTableBody()}
      </table>
    );
  }
}

Table.propTypes = {
  fetchPlanets: propTypes.func.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  nameInput: propTypes.string.isRequired,
  filters: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.fetch.loading,
  data: state.fetch.data,
  error: state.fetch.error,
  nameInput: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

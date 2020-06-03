import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchData } from '../actions';

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
    const { data, nameInput } = this.props;
    return (
      <tbody>
        {data.filter((planet) => planet.name.toLowerCase().includes(nameInput.toLowerCase())).map(
          (planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{`${planet.rotation_period} hours`}</td>
              <td>{`${planet.orbital_period} days`}</td>
              <td>{`${planet.diameter} km`}</td>
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
          ),
        )}
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
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
  nameInput: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

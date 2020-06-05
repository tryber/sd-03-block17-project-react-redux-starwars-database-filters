import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderThead from './renderThead';
import { requestAction, textChanged } from '../../actions';

class Table extends React.Component {
  componentDidMount() {
    const { requestTable } = this.props;
    requestTable();
  }

  filterTable() {
    const { name, table } = this.props;
    if (name) {
      return table.filter(
        (planet) => planet
          .name
          .toLowerCase()
          .includes(
            name.toLowerCase(),
          ),
      );
    }
    return table;
  }

  handleChange(e) {
    const { search } = this.props;
    search(e);
    this.filterTable();
  }

  renderTbody() {
    const filteredTable = this.filterTable();
    return (
      <tbody>
        {filteredTable.map((planet) => (
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
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    const { name } = this.props;

    return (
      <div className="table-container">
        <label htmlFor="name-filter">
          Pesquisa:&nbsp;
          <input
            id="name-filter"
            data-testid="name-filter"
            type="text"
            onChange={({ target: { value } }) => this.handleChange(value)}
            value={name}
          />
        </label>
        <br />
        <table>
          <RenderThead />
          {this.renderTbody()}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  name: PropTypes.string.isRequired,
  requestTable: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  table: PropTypes.arrayOf(PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

const mapStateTProps = (state) => ({
  table: state.requestReducer.data,
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  requestTable: () => dispatch(requestAction()),
  search: (e) => dispatch(textChanged(e)),
});

export default connect(mapStateTProps, mapDispatchToProps)(Table);

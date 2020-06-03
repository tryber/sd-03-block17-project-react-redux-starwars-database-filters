import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import * as actions from '../actions/index';
import './Table.css';

const tableCreator = (obj) =>
  <tr key={obj.name}>
    <td>{obj.name}</td>
    <td>{obj.rotation_period}</td>
    <td>{obj.orbital_period}</td>
    <td>{obj.diameter}</td>
    <td>{obj.climate}</td>
    <td>{obj.gravity}</td>
    <td>{obj.terrain}</td>
    <td>{obj.surface_water}</td>
    <td>{obj.population}</td>
    <td>
      {obj.films.map((e) => e)}
    </td>
    <td>{obj.created}</td>
    <td>{obj.edited}</td>
    <td>{obj.url}</td>
  </tr>;

const filteredPlanets = ({ column, comparison, value }, planets) => {
  switch (comparison) {
    case 'Maior que':
      return planets.filter((e) => e[column] > value);
    case 'Menor que':
      return planets.filter((e) => e[column] < value);
    case 'Igual a':
      return planets.filter((e) => (e[column] - value) === 0);
    default:
      return planets;
  }
};

class Table extends React.Component {
  render() {
    const { planets, isFetching, filterByName } = this.props;
    const { filterByNumericValues } = this.props;
    const dataReceived = planets.length;
    let planetoides = [];
    let dataReady = false;
    let dataKeys = [];
    let regex = '';
    if (dataReceived) {
      dataKeys = [...Object.keys(planets[0])];
      const cutData = dataKeys.indexOf('residents');
      regex = new RegExp(`${filterByName}`, 'i');
      dataKeys.splice(cutData, 1);
      dataReady = true;
      planetoides = [...filteredPlanets(filterByNumericValues[0], planets)];
    }
    return (
      <div>
        {dataReady && !isFetching &&
        <table><tbody>
          <tr>{dataKeys.map((e) => <th key={e}>{e}</th>)}</tr>
          {
            planetoides.filter(({ name }) => name.match(regex)).map((e) => tableCreator(e))
          }
        </tbody></table>
        }
        { isFetching && <span>...Loading</span>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.data.planets,
  isFetching: state.data.isFetching,
  filterByName: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  savePlanetByNumericValues: (data) => dispatch(actions.filteredPlanets(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// faça as proptypes da ação oriunda do thunk
Table.propTypes = {
  planets: PropTypes.arrayOf(object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filterByName: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(object),
  savePlanetByNumericValues: PropTypes.func.isRequired,
};

import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
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

class Table extends React.Component {
  render() {
    const { planets, isFetching, filterByName } = this.props;
    const dataReceived = planets.length;
    let dataReady = false;
    let dataKeys = [];
    let regex = '';

    if (dataReceived) {
      dataKeys = [...Object.keys(planets[0])];
      const cutData = dataKeys.indexOf('residents');
      regex = new RegExp(`${filterByName}`, 'i' );
      dataKeys.splice(cutData, 1);
      dataReady = true;
    }

    return (
      <div>
        StarWars Datatable with Filters
        {dataReady && !isFetching &&
        <table><tbody>
          <tr>
            {
            dataKeys.map((e) => <th key={e}>{e}</th>)
            }
          </tr>
          {
            planets.filter(({name}) => name.match(regex)).map((e) => tableCreator(e))
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
});

export default connect(mapStateToProps)(Table);

// faça as proptypes da ação oriunda do thunk
Table.propTypes = {
  planets: PropTypes.arrayOf(object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filterByName: PropTypes.string.isRequired,
};

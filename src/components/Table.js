import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import './Table.css';

class Table extends React.Component {
  static tableCreator(obj) {
    return (
      <tr>
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
      </tr>
    );
  }

  constructor(props) {
    super(props);
    this.tableCreator = this.tableCreator.bind(this);
  }

  render() {
    const { planets, isFetching } = this.props;
    const dataReceived = planets.length;
    let dataReady = false;
    let dataKeys = [];
    if (dataReceived) {
      dataKeys = [...Object.keys(planets[0])];
      const cutData = dataKeys.indexOf('residents');
      dataKeys.slice(cutData, 1);
      dataReady = true;
    }

    return (
      <div>
        StarWars Datatable with Filters
        {dataReady && !isFetching &&
        <table>
          <tr>
            {
            dataKeys.map((e) => <th>{e}</th>)
            }
          </tr>
          {
            planets.map((e) => this.tableCreator(e))
          }
        </table>
        }
        { isFetching && <span>...Loading</span>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.data.planets,
  isFetching: state.data.isFetching,
});

export default connect(mapStateToProps)(Table);

// faça as proptypes da ação oriunda do thunk
Table.propTypes = {
  planets: PropTypes.arrayOf(object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

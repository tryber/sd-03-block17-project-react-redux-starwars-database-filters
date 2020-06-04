import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { handleFetch } from '../actions/fetchActions';

import TableHeaders from './TableHeaders';
// import TableRow from './TableRow';

const numericFilter = (planet, column, comparison, value) => {
  console.log(planet[column])
  console.log(value)
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return [];
  }
};

function filterByText(planets, text) {
  return planets.filter((planet) => text === '' || planet.name.toUpperCase().includes(text.toUpperCase()));
}


class Table extends React.Component {
  componentDidMount() {
    const { dispatchFetch } = this.props;
    dispatchFetch();
  }

  filterNumeric(filteredData) {
    const { filterByNumericValues } = this.props;
    console.log('----------------------------------', filterByNumericValues);
    return filterByNumericValues.reduce((acc, {
      column, comparison, value,
    }) => acc.filter((planet) => numericFilter(planet, column, comparison, value)), filteredData);
  }

  render() {
    const {
      data, name,
    } = this.props;
    let mapPlanets = data;
    mapPlanets = filterByText(mapPlanets, name);
    mapPlanets = this.filterNumeric(mapPlanets);
    console.log(mapPlanets);
    return (
      <table border="1px">
        <tbody>
          {data.length > 0 && <TableHeaders heads={Object.keys(data[0])} />}
          {data.length > 0 ? mapPlanets.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet).map((value) => <td key={value}>{value}</td>)}
            </tr>
          ))
            : <h2>Loading</h2>}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({
  requestReducer: { data },
  filters: { filterByName: { name }, filterByNumericValues },
}) => ({
  data,
  name,
  filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchFetch: () => dispatch(handleFetch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  dispatchFetch: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  filterByNumericValues: propTypes.arrayOf(propTypes.object),
/*   planet: propTypes.shape({
    name: propTypes.string,
    rotation_period: propTypes.string,
    diameter: propTypes.string,
    climate: propTypes.string,
    gravity: propTypes.string,
    terrain: propTypes.string,
    surface_water: propTypes.string,
    population: propTypes.string,
    films: arrayOf(propTypes.string),
    created: propTypes.string,
    edited: propTypes.string,
    url: propTypes.string,
  }).isRequired, */
};

Table.defaultProps = {
  filterByNumericValues: [{}],
};

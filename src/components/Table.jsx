import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

const head = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'residents',
  'films',
  'created',
  'edited',
  'url',
];

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('mont');
    const { getPlanets } = this.props;
    getPlanets();
  }

  handleChange(e) {
    const { setFilter } = this.props;
    setFilter(e.target.value);
  }

  filterData(data) {
    const { filters: { filterByName } } = this.props;
    let newData;

    if (data.results.length && filterByName.name) {
      newData = {
        ...data,
        results: data.results.filter((planet) => planet.name.includes(filterByName.name)),
      };
      return newData;
    }

    return data;
  }

  render() {
    const { data } = this.props;
    const {
      filters: { filterByName },
    } = this.props;

    const filteredData = this.filterData(data);

    return (
      <>
        <input
          value={filterByName.name}
          type="text"
          onChange={this.handleChange}
        />
        <table>
          <thead>
            <tr>
              {head.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>

          <tbody>
            {filteredData.results.map((planet) => (
              <tr key={planet.name}>
                {Object.entries(planet).map((header) => (header[0] === 'residents' ? (
                  <td key={header}>null </td>
                ) : (
                  <td key={header}>{header[1]}</td>
                )))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    getPlanets: () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((r) => r.json())
      .then((r) => dispatch({ type: 'API_CALL', r })),

    setFilter: (filter) => dispatch({ type: 'SET_FILTER', filter }),
  };
}
function mapState(state) {
  return {
    data: state.data,
    filters: state.filters,
  };
}

export default connect(mapState, mapDispatch)(Table);

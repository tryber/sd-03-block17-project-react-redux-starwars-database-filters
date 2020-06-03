import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterComp from './FilterComp';

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
  'films',
  'created',
  'edited',
  'url',
];

const filterArray = [
  { filter: 'population', name: 'Population' },
  { filter: 'orbital_period', name: 'Período orbital' },
  { filter: 'diameter', name: 'Diâmetro' },
  { filter: 'rotation_period', name: 'Periodo Rotacional' },
  { filter: 'surface_water', name: 'Agua na superfície' },
];

function setFilter(type, name, value) {
  if (type === 'Maior que') {
    return (e) => e[name] > value;
  }
  if (type === 'Menor que') {
    return (e) => e[name] < value;
  }
  if (type === 'Igual a') {
    return (e) => e[name] === value;
  }
  return (e) => e;
}

class Table extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      filteredNumberData: data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fireFilter = this.fireFilter.bind(this);
  }

  componentDidMount() {
    console.log('mont');
    const { getPlanets } = this.props;
    getPlanets();
  }


  componentDidUpdate(prevProps) {
    const { data } = this.props;
    this.checkState(prevProps, data);
  }

  checkState(prevProps, data) {
    if (prevProps.data !== data) {
      this.setState({ filteredNumberData: data });
    }
  }

  handleChange(e) {
    const { setNameFilter } = this.props;
    setNameFilter(e.target.value);
  }

  fireFilter(id) {
    const { filters: { filterByNumericValues }, data } = this.props;
    const { comparison: type, column: name, value } = filterByNumericValues[id];
    const filteredNumberData = data.filter(setFilter(type, name, value));
    console.log(filteredNumberData);
    this.setState({ filteredNumberData });
  }

  filterData(data) {
    const { filters: { filterByName } } = this.props;
    let newData;

    if (data.length && filterByName.name) {
      newData = data.filter((planet) => planet.name.includes(filterByName.name));

      return newData;
    }

    return data;
  }

  renderInput(filterByName) {
    return (
      <input
        value={filterByName.name}
        type="text"
        onChange={this.handleChange}
        data-testid="name-filter"
      />
    );
  }

  render() {
    const { filteredNumberData } = this.state;
    const { filters: { filterByName } } = this.props;
    const filteredData = this.filterData(filteredNumberData);
    return (
      <div>
        {this.renderInput(filterByName)}

        <FilterComp fireFilter={this.fireFilter} filterArray={filterArray} />
        <table>
          <thead>
            <tr>
              {head.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((planet) => (
              <tr key={planet.name}>
                {Object.entries(planet).map((header) => (header[0] === 'residents' ? (
                  null
                ) : (
                  <td key={header}>{header[1]}</td>
                )))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  filters: PropTypes.isRequired,
  setNameFilter: PropTypes.isRequired,
  data: PropTypes.isRequired,

};


function mapDispatch(dispatch) {
  return {
    getPlanets: () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((r) => r.json())
      .then((r) => dispatch({ type: 'API_CALL', r })),

    setNameFilter: (filter) => dispatch({ type: 'SET_NAME_FILTER', filter }),
  };
}
function mapState(state) {
  return {
    data: state.data.results,
    filters: state.filters,

  };
}

export default connect(mapState, mapDispatch)(Table);

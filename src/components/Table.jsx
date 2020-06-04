import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterComp from './FilterComp';
import OrderFilter from './OrderFilter';

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
function sortFunction(column) {
  return (a, b) => {
    if (a[column] > b[column]) {
      return 1;
    }
    if (a[column] < b[column]) {
      return -1;
    }
    return 0;
  };
}

const strings = ['name', 'climate', 'terrain', 'films', 'url'];

function setFilter(type, name, value) {
  if (type === 'maior que') {
    return (e) => +e[name] > +value;
  }
  if (type === 'menor que') {
    return (e) => +e[name] < +value;
  }
  if (type === 'igual a') {
    return (e) => +e[name] === +value;
  }
  return (e) => e;
}


function checkAsc(order, data) {
  let filteredNumberData = data;

  filteredNumberData = strings.includes(order.column)
    ? filteredNumberData.sort(sortFunction(order.column))
    : filteredNumberData.sort((a, b) => a[order.column] - b[order.column]);


  return filteredNumberData;
}

function checkDesc(order, data) {
  let filteredNumberData = data;

  filteredNumberData = strings.includes(order.column)
    ? filteredNumberData.sort(sortFunction(order.column)).reverse()
    : filteredNumberData.sort((a, b) => b[order.column] - a[order.column]);

  return filteredNumberData;
}


class Table extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      filteredNumberData: data.sort(sortFunction('name')),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }


  componentDidUpdate(prevProps) {
    const { data, order } = this.props;
    this.checkState(prevProps, data, order);
    this.checkOrder(prevProps, order, data);
  }


  checkOrder(prevProps, order, data) {
    if (prevProps.order !== order) {
      console.log('orderChanged', order.sort, order.column);
      let filteredNumberData;
      if (order.sort === 'ASC') {
        filteredNumberData = checkAsc(order, data);
      }
      if (order.sort === 'DSC') {
        filteredNumberData = checkDesc(order, data);
      }

      this.setState({ filteredNumberData });
    }
  }

  checkNumeriFilter(prevProps, filterByNumericValues, data) {
    if (prevProps.filters.filterByNumericValues !== filterByNumericValues) {
      let filteredNumberData = data;
      filterByNumericValues.forEach(({ comparison: type, column: name, value }) => {
        filteredNumberData = filteredNumberData.filter(setFilter(type, name, value));
      });

      this.setState({ filteredNumberData });
    }
  }

  checkState(prevProps, data, order) {
    const { filters: { filterByNumericValues } } = this.props;


    if (prevProps.data !== data) {
      this.setState({ filteredNumberData: data });
    }

    this.checkNumeriFilter(prevProps, filterByNumericValues, data);
  }

  handleChange(e) {
    const { setNameFilter } = this.props;
    setNameFilter(e);
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
        onChange={(e) => this.handleChange(e.target.value)}
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
        <OrderFilter />

        <FilterComp />
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
  order: PropTypes.objectOf(PropTypes.string).isRequired,

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
    order: state.filters.order,

  };
}

export default connect(mapState, mapDispatch)(Table);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        { id: 1, title: 'name' },
        { id: 2, title: 'climate' },
        { id: 3, title: 'created' },
        { id: 4, title: 'diameter' },
        { id: 5, title: 'edited' },
        { id: 6, title: 'films' },
        { id: 7, title: 'gravity' },
        { id: 8, title: 'orbital period' },
        { id: 9, title: 'population' },
        { id: 10, title: 'residents' },
        { id: 11, title: 'rotation period' },
        { id: 12, title: 'surface water' },
        { id: 13, title: 'terrain' },
      ],
    };
    this.tbody = this.tbody.bind(this);
    this.tbody = this.tbodyFiltersBig.bind(this);
    this.tbody = this.tbodyFiltersLess.bind(this);
    this.tbody = this.tbodyFiltersEqual.bind(this);
  }

  tbody(data, name) {
    return (
      <tbody>
        {data.filter((item) => item.name.includes(name))
          .map((item) => <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diameter}</td>
            <td>{item.edited}</td>
            <td>#</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>#</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
          </tr>)}
      </tbody>
    );
  }

  tbodyFiltersBig(data, name, option, valueFilter) {
    return (
      <tbody>
        {data.filter((item) => item.name.includes(name)
          && parseInt(item[option]) > parseInt(valueFilter, 10))
          .map((item) => <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diameter}</td>
            <td>{item.edited}</td>
            <td>#</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>#</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
          </tr>)}
      </tbody>
    );
  }

  tbodyFiltersLess(data, name, option, valueFilter) {
    return (
      <tbody>
        {data.filter((item) => item.name.includes(name)
          && parseInt(item[option]) < parseInt(valueFilter, 10))
          .map((item) => <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diameter}</td>
            <td>{item.edited}</td>
            <td>#</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>#</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
          </tr>)}
      </tbody>
    );
  }

  tbodyFiltersEqual(data, name, option, valueFilter) {
    return (
      <tbody>
        {data.filter((item) => item.name.includes(name)
          && parseInt(item[option]) === parseInt(valueFilter, 10))
          .map((item) => <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diameter}</td>
            <td>{item.edited}</td>
            <td>#</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>#</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
          </tr>)}
      </tbody>
    );
  }

  table() {
    const { data, name, option, valueFilter, isFiltered, comparison } = this.props;
    const { titles } = this.state;
    return (
      <table>
        <thead>
          <tr>
            {titles.map((item) => <th key={item.id}>{item.title}</th>)}
          </tr>
        </thead>
        {!isFiltered && this.tbody(data, name)}
        {
          comparison === 'bigger_then' &&
          isFiltered &&
          this.tbodyFiltersBig(data, name, option, valueFilter)
        }
        {
          comparison === 'less_then' &&
          isFiltered &&
          this.tbodyFiltersLess(data, name, option, valueFilter)
        }
        {
          comparison === 'equal' &&
          isFiltered &&
          this.tbodyFiltersEqual(data, name, option, valueFilter)
        }
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.table()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  option: state.reducerFilters.filters.filterByNumericValues[0].column,
  comparison: state.reducerFilters.filters.filterByNumericValues[0].comparison,
  valueFilter: state.reducerFilters.filters.filterByNumericValues[0].value,
  isFiltered: state.reducerFilters.filters.filterByNumericValues[0].isFiltered,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  valueFilter: PropTypes.string.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Table);

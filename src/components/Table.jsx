/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPlanets, {
  filterByName,
  filterByNumericValues,
} from '../redux/actions/actions';

const tableHead = [
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

class Table extends Component {
  static filterLogic(data, name, filterInputs) {
    if (filterInputs) {
      return filterByNumericValues.length === 0
        ? data.filter((planet) => planet.name.toLowerCase().includes(name))
        : filterInputs.reduce(
          (acc, { column, comparison, value }) => acc.filter((planet) => {
            switch (comparison) {
              case 'maior que':
                return (
                  planet.name.includes(name)
                    && parseFloat(planet[column]) > parseFloat(value)
                );
              case 'menor que':
                return (
                  planet.name.includes(name)
                    && parseFloat(planet[column]) < parseFloat(value)
                );
              case 'igual a':
                return (
                  planet.name.includes(name)
                    && parseFloat(planet[column]) === parseFloat(value)
                );
              default:
                return planet.name.includes(name);
            }
          }),
          data,
        );
    } return filterByNumericValues.length >= 0
      ? data.filter((planet) => planet.name.toLowerCase().includes(name))
      : filterInputs.reduce(
        (acc, { column, comparison, value }) => acc.filter((planet) => {
          switch (comparison) {
            case 'maior que':
              return (
                planet.name.includes(name)
                  && parseFloat(planet[column]) > parseFloat(value)
              );
            case 'menor que':
              return (
                planet.name.includes(name)
                  && parseFloat(planet[column]) < parseFloat(value)
              );
            case 'igual a':
              return (
                planet.name.includes(name)
                  && parseFloat(planet[column]) === parseFloat(value)
              );
            default:
              return planet.name.includes(name);
          }
        }),
        data,
      );
  }


  constructor(props) {
    super(props);

    this.state = {
      value: '',
      column: '',
      comparison: '',
    };
    this.onClick = this.onClick.bind(this);
    this.handleNumberInput = this.handleNumberInput.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  static renderTable(data) {
    return data.map((planet) => (
      <tr key={planet.url}>
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
    ));
  }

  static renderLoading() {
    return <p>LOADING...</p>;
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  onClick() {
    const { value, column, comparison } = this.state;
    const { filterByInput } = this.props;
    filterByInput(column, comparison, value);
    this.setState({ value: '', column: '', comparison: '' });
  }

  handleNumberInput(event) {
    this.setState({ value: event.target.value });
  }

  handleNameFilter(text) {
    const { filterName } = this.props;
    filterName(text);
  }

  handleSelectChange(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: value });
  }

  render() {
    const {
      name, data, isFetching, filterByNumericValues,
    } = this.props;

    const filter = Table.filterLogic(data, name, filterByNumericValues);
    // const filter = data.filter((planet) => planet.name.toLowerCase().includes(name));

    return isFetching ? (
      Table.renderLoading()
    ) : (
      <div>
        <form>
          <select
            data-testid="column-filter"
            onChange={(event) => this.handleSelectChange(event, 'column')}
            value={this.state.column}
          >
            <option> </option>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select
            data-testid="comparison-filter"
            onChange={(event) => this.handleSelectChange(event, 'comparison')}
            value={this.state.comparison}
          >
            <option> </option>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input
            onChange={(event) => this.handleNumberInput(event)}
            placeholder="digite um valor"
            data-testid="value-filter"
            value={this.state.value}
            type="number"
          />
          <button
            onClick={this.onClick}
            type="button"
            data-testid="button-filter"
          >
            Filtrar
          </button>
        </form>
        <input
          placeholder="pesquisar por nome"
          data-testid="name-filter"
          onChange={(event) => this.handleNameFilter(event.target.value)}
          value={this.props.name}
        />
        <table>
          <thead>
            <tr>
              {tableHead.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>{Table.renderTable(filter)}</tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
  filterName: (name) => dispatch(filterByName(name)),
  filterByInput: (column, comparison, value) => dispatch(filterByNumericValues(column, comparison, value)),
});

const mapStateToProps = ({
  data,
  isFetching,
  filters: {
    filterByName: { name },
    filterByNumericValues,
  },
}) => ({
  data,
  name,
  isFetching,
  filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

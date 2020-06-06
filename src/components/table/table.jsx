import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderThead from './renderThead';
import { requestAction, textChanged, selectChanged } from '../../actions';

const columnFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonFilter = [
  'maior que',
  'igual a',
  'menor que',
];

const comparator = (column, comparison, value, element) => {
  switch (comparison) {
    case 'maior que':
      return Number(element[column]) > Number(value);
    case 'igual a':
      return Number(element[column]) === Number(value);
    case 'menor que':
      return Number(element[column]) < Number(value);
    default:
      return [];
  }
};

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  componentDidMount() {
    const { requestTable } = this.props;
    requestTable();
  }

  filterByText() {
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

  filterByNumeric() {
    const { filters } = this.props;
    const filteredList = filters.reduce(
      (acc, { column, comparison, value }) => acc.filter(
        (element) => comparator(column, comparison, value, element),
      ), this.filterByText(),
    );
    return filteredList;
  }

  handleChange(e) {
    const { search } = this.props;
    search(e);
    this.filterByText();
  }

  renderColumnSelect() {
    return (
      <label htmlFor="column-filter">
        Coluna:&nbsp;
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={({ target: { value } }) => this.setState({ column: value })}
        >
          <option value=""/>
          {columnFilter.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
    );
  }

  renderComparisonSelect() {
    return (
      <label htmlFor="comparison-filter">
        &nbsp;Comparação:&nbsp;
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={({ target: { value } }) => this.setState({ comparison: value })}
        >
          <option value=""/>
          {comparisonFilter.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
    );
  }

  renderValueSelect() {
    return (
      <label htmlFor="value-filter">
        &nbsp;Valor:&nbsp;
        <input
          data-testid="value-filter"
          id="value-filter"
          onChange={({ target: { value } }) => this.setState({ value })}
          type="text"
        />
      </label>
    );
  }

  renderButton() {
    const { selectDispatch } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <button
        data-testid="button-filter"
        onClick={() => selectDispatch({ column, comparison, value })}
        type="button"
      >
        Filtrar:
      </button>
    );
  }

  renderTbody() {
    const filteredTable = this.filterByNumeric();
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
    return (
      <div className="table-container">
        {this.renderColumnSelect()}
        {this.renderComparisonSelect()}
        {this.renderValueSelect()}
        {this.renderButton()}
        <label htmlFor="name-filter">
        &nbsp;Pesquisa:&nbsp;
          <input
            id="name-filter"
            data-testid="name-filter"
            type="text"
            onChange={({ target: { value } }) => this.handleChange(value)}
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
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  requestTable: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  selectDispatch: PropTypes.func.isRequired,
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
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  requestTable: () => dispatch(requestAction()),
  search: (e) => dispatch(textChanged(e)),
  selectDispatch: (value) => dispatch(selectChanged(value)),
});

export default connect(mapStateTProps, mapDispatchToProps)(Table);

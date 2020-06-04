import React from 'react';
import { connect } from 'react-redux';
import {
  fetchData, getByName, getByNumericValue, doMoreFilter, removeFilter, returnColumn,
} from '../actions/action';
import store from '../store/store'

const header = {
  name: 'nome',
  population: 'população',
  diameter: 'diametro',
  climate: 'clima',
  created: 'criado em',
  gravity: 'gravidade',
  orbital_period: 'período de órbita',
  rotation_period: 'período de rotação',
  surface_water: 'Água Superfecial',
  terrain: 'Vegetação',
  films: 'filmes',
  edited: 'editado em',
  url: 'url',
};
const comparisonOptions = ['maior que', 'igual a', 'menor que', ''];

function doCompare(e, el) {
  switch (el.comparison) {
    case 'maior que': return parseInt(e[el.column]) > parseInt(el.value, 10);
    case 'menor que': return parseInt(e[el.column]) < parseInt(el.value, 10);
    case 'igual a': return parseInt(e[el.column]) === parseInt(el.value, 10);
    default: return [];
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: '',
      column: '',
      comparison: '',
      value: '',
      filterValues: false,
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
  }

  changeFilterName(e) {
    const { getByName } = this.props;
    this.setState({ nameFilter: e.target.value });
    getByName(e.target.value);
  }

  changeColumn(e) {
    this.setState({ column: e.target.value });
  }

  changeComparison(e) {
    this.setState({
      comparison: e.target.value,
    });
  }

  changeValue(e) {
    this.setState({ value: e.target.value });
  }

  doFilter() {
    const { getByNumericValue, doMoreFilter } = this.props;
    const { column, comparison, value } = this.state;
    getByNumericValue(column, comparison, value);
    this.setState({
      filterValues: true, column: '', comparison: '', value: '',
    });
    doMoreFilter(column);
  }

  filterData() {
    const { data, numericFilter } = this.props;
    if (numericFilter) {
      const filteredData = numericFilter
        .reduce((acc, el) => acc.filter((e) => doCompare(e, el)), data);
      if (filteredData) return filteredData;
      return [];
    }
    return [];
  }

  doRemoveFilter(e) {
    const { removeFilter, returnColumn } = this.props;
    removeFilter(e);
    returnColumn(e);
  }

  renderNumericFilter() {
    const { columnOptions } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <div>
        Selecionar por Valores
        <div>
          <select value={column} data-testid="column-filter" onChange={(e) => this.changeColumn(e)}>
            {columnOptions.map((e) => <option value={e}>{e}</option>)}
          </select>
          <select value={comparison} data-testid="comparison-filter" onChange={(e) => this.changeComparison(e)}>
            {comparisonOptions.map((e) => <option value={e}>{e}</option>)}
          </select>
          <input value={value} data-testid="value-filter" onChange={(e) => this.changeValue(e)} />
          <button type="button" data-testid="button-filter" onClick={() => this.doFilter()}>Filtrar</button>
        </div>
      </div>
    );
  }

  render() {
    const { data, filter, numericFilter } = this.props;
    const { nameFilter, filterValues } = this.state;
    console.log(numericFilter)
    return (
      <div>
        <label htmlFor="name-filter">
          Buscar por Nome:
          <input onChange={(e) => this.changeFilterName(e)} id="name-filter" data-testid="name-filter" value={nameFilter} />
        </label>
        {this.renderNumericFilter()}
        {filterValues && numericFilter.map((e) => (
          <div data-testid="filter">
            <span>{`Coluna: ${e.column}   `}</span>
            <span>{`Coluna: ${e.comparison}   `}</span>
            <span>{`Coluna: ${e.value}`}</span>
            <button type="button" onClick={() => this.doRemoveFilter(e)}>X</button>
          </div>
        ))}
        <table>
          <thead>
            <tr>
              {Object.values(header).map((e) => <th>{e}</th>)}
            </tr>
          </thead>
          <tbody>
            {!filterValues && filter && data.filter((e) => e.name.includes(filter.name)).map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {!filter && !filterValues && data.map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {filterValues && this.filterData().map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  filter: state.reducer.filters.filterByName,
  numericFilter: state.reducer.filters.filterByNumericValues,
  columnOptions: state.columnsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchData()),
  getByName: (e) => dispatch(getByName(e)),
  getByNumericValue: (column, comparison, value) => dispatch(getByNumericValue(column, comparison, value)),
  doMoreFilter: (column) => dispatch(doMoreFilter(column)),
  removeFilter: (filter) => dispatch(removeFilter(filter)),
  returnColumn: (column) => dispatch(returnColumn(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

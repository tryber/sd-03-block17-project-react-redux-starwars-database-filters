import React from 'react';
import { connect } from 'react-redux';
import {
  fetchData, getByName, getByNumericValue, doMoreFilter, removeFilter, returnColumn, sortColumns, changedataASC, changedataDESC,
} from '../actions/action';

const header = {
  name: 'nome',
  population: 'população',
  climate: 'clima',
  diameter: 'diametro',
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
      asc: true,
      desc: false,
      ordercolumn: 'name',
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
    this.setState({ filterValues: true });
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

  changeSortColumn(e) {
    this.setState({ ordercolumn: e.target.value });
  }

  changeASC() {
    this.setState((state) => ({ asc: !state.asc, desc: !state.desc }));
  }

  changeDESC() {
    this.setState((state) => ({ asc: !state.asc, desc: !state.desc }));
  }

  doSortColumns(ordercolumn, asc, desc) {
    const { sortColumns, changedataASC, changedataDESC } = this.props;
    if (asc) { sortColumns(ordercolumn, asc); changedataASC(ordercolumn); }
    if (desc) { sortColumns(ordercolumn, desc); changedataDESC(ordercolumn); }
  }

  render() {
    const { data, filter, numericFilter, order, columnOptions } = this.props;
    const { nameFilter, filterValues, asc, desc, ordercolumn } = this.state;
    return (
      <div>
        <label htmlFor="name-filter">
          Buscar por Nome:
          <input onChange={(e) => this.changeFilterName(e)} id="name-filter" data-testid="name-filter" value={nameFilter} />
        </label>
        {this.renderNumericFilter()}
        {numericFilter.map((e) => (
          <div data-testid="filter">
            <span>{`Coluna: ${e.column}   `}</span>
            <span>{`Coluna: ${e.comparison}   `}</span>
            <span>{`Coluna: ${e.value}`}</span>
            <button type="button" onClick={() => this.doRemoveFilter(e)}>X</button>
          </div>
        ))}
        <div>
          <div>Ordenar por:
          <select value={ordercolumn} data-testid="column-sort" onChange={(e) => this.changeSortColumn(e)}>
            {Object.keys(header).map((e) => <option value={e}>{e}</option>)}
          </select>
            <label><input type="radio" data-testid="column-sort-input" value="ASC" id="asc" checked={asc} onClick={() => this.changeASC()} />ASC</label>
            <label><input type="radio" data-testid="column-sort-input" id="desc" value="DESC" checked={desc} onClick={() => this.changeDESC()} />DESC</label>
            <button type="button" data-testid="column-sort-button" onClick={() => this.doSortColumns(ordercolumn, asc, desc)}>ordenar</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              {Object.keys(header).map((e) => <th>{e}</th>)}
            </tr>
          </thead>
          <tbody>
            {!filter && !filterValues && data.map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {!filterValues && filter && data.filter((e) => e.name.includes(filter.value)).map((e) => (
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
  data: state.dataReducer.data,
  filter: state.filters.filterByName,
  numericFilter: state.filters.filterByNumericValues,
  order: state.filters.order,
  columnOptions: state.columnsReducer,
  state,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchData()),
  getByName: (e) => dispatch(getByName(e)),
  getByNumericValue: (column, comparison, value) => dispatch(getByNumericValue(column, comparison, value)),
  doMoreFilter: (column) => dispatch(doMoreFilter(column)),
  removeFilter: (filter) => dispatch(removeFilter(filter)),
  returnColumn: (column) => dispatch(returnColumn(column)),
  sortColumns: (column, sort) => dispatch(sortColumns(column, sort)),
  changedataASC: (column) => dispatch(changedataASC(column)),
  changedataDESC: (column) => dispatch(changedataDESC(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

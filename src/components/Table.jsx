import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchData,
  getByName,
  getByNumericValue,
  doMoreFilter,
  removeFilter,
  returnColumn,
  sortColumns,
  changedataASC,
  changedataDESC,
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
    case 'maior que': return parseInt(e[el.column], 10) > parseInt(el.value, 10);
    case 'menor que': return parseInt(e[el.column], 10) < parseInt(el.value, 10);
    case 'igual a': return parseInt(e[el.column], 10) === parseInt(el.value, 10);
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
    const { getByNameprop } = this.props;
    this.setState({ nameFilter: e.target.value });
    getByNameprop(e.target.value);
  }

  changeColum(e) {
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
    const { getByNumericValueprop, doMoreFilterprop } = this.props;
    const { column, comparison, value } = this.state;
    getByNumericValueprop(column, comparison, value);
    this.setState({ filterValues: true });
    doMoreFilterprop(column);
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
    const { removeFilterprop, returnColumnprop } = this.props;
    removeFilterprop(e);
    returnColumnprop(e);
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
    const { sortColumnsprop, changedataASCprop, changedataDESCprop } = this.props;
    if (asc) { sortColumnsprop(ordercolumn, asc); changedataASCprop(ordercolumn); }
    if (desc) { sortColumnsprop(ordercolumn, desc); changedataDESCprop(ordercolumn); }
  }

  renderNameFilter() {
    const { nameFilter } = this.state;
    return (
      <label htmlFor="name-filter">
        Buscar por Nome:
        <input
          onChange={(e) => this.changeFilterName(e)}
          id="name-filter"
          data-testid="name-filter"
          value={nameFilter}
        />
      </label>
    );
  }

  renderSelectedFilters() {
    const { numericFilter } = this.props;
    return (numericFilter.map((e) => (
      <div data-testid="filter">
        <span>{`Coluna: ${e.column}   `}</span>
        <span>{`Coluna: ${e.comparison}   `}</span>
        <span>{`Coluna: ${e.value}`}</span>
        <button type="button" onClick={() => this.doRemoveFilter(e)}>X</button>
      </div>
    )));
  }

  renderASCButton() {
    const { asc } = this.state;
    return (
      <label>
        <input
          type="radio"
          data-testid="column-sort-input"
          value="ASC"
          id="asc"
          checked={asc}
          onClick={() => this.changeASC()}
        />
    ASC
      </label>
    );
  }

  renderDESCButton() {
    const { desc } = this.state;
    return (
      <label>
        <input
          type="radio"
          data-testid="column-sort-input"
          id="desc"
          value="DESC"
          checked={desc}
          onClick={() => this.changeDESC()}
        />
    DESC
      </label>
    );
  }

  renderSorter() {
    const { ordercolumn, asc, desc } = this.state;
    return (
      <div>
        <div>
          Ordenar por:
          <select
            value={ordercolumn}
            data-testid="column-sort"
            onChange={(e) => this.changeSortColumn(e)}
          >
            {Object.keys(header).map((e) => <option value={e}>{e}</option>)}
          </select>
          {this.renderASCButton()}
          {this.renderDESCButton()}
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={() => this.doSortColumns(ordercolumn, asc, desc)}
          >
            ordenar
          </button>
        </div>
      </div>
    );
  }

  renderNumericFilter() {
    const { columnOptions } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <div>
        Selecionar por Valores
        <select value={column} data-testid="column-filter" onChange={(e) => this.changeColum(e)}>
          {columnOptions.map((e) => <option value={e}>{e}</option>)}
        </select>
        <select
          value={comparison}
          data-testid="comparison-filter"
          onChange={(e) => this.changeComparison(e)}
        >
          {comparisonOptions.map((e) => <option value={e}>{e}</option>)}
        </select>
        <input value={value} data-testid="value-filter" onChange={(e) => this.changeValue(e)} />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => this.doFilter()}
        >
            Filtrar
        </button>
      </div>
    );
  }

  static renderTableheaders() {
    return (
      <thead>
        <tr>
          {Object.keys(header).map((e) => <th>{e}</th>)}
        </tr>
      </thead>
    );
  }

  renderTableData() {
    const { filter, data } = this.props;
    const { filterValues } = this.state;
    return (
      !filter && !filterValues && data.map((e) => (
        <tr key={e.name}>
          {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
        </tr>
      ))
    );
  }

  renderFilteredDataByName() {
    const { data, filter } = this.props;
    const { filterValues } = this.state;
    return (
      !filterValues && filter && data.filter((e) => e.name.includes(filter.value)).map((e) => (
        <tr key={e.name}>
          {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
        </tr>
      ))
    );
  }

  renderFilteredDataByNumeric() {
    const { filterValues } = this.state;
    return (
      filterValues && this.filterData().map((e) => (
        <tr key={e.name}>
          {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
        </tr>
      ))
    );
  }

  render() {
    return (
      <div>
        {this.renderNameFilter()}
        {this.renderNumericFilter()}
        {this.renderSelectedFilters()}
        {this.renderSorter()}
        <table>
          {Table.renderTableheaders()}
          <tbody>
            {this.renderTableData()}
            {this.renderFilteredDataByName()}
            {this.renderFilteredDataByNumeric()}
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
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchData()),
  getByNameprop: (e) => dispatch(getByName(e)),
  getByNumericValueprop:
    (column, comparison, value) => dispatch(getByNumericValue(column, comparison, value)),
  doMoreFilterprop: (column) => dispatch(doMoreFilter(column)),
  removeFilterprop: (filter) => dispatch(removeFilter(filter)),
  returnColumnprop: (column) => dispatch(returnColumn(column)),
  sortColumnsprop: (column, sort) => dispatch(sortColumns(column, sort)),
  changedataASCprop: (column) => dispatch(changedataASC(column)),
  changedataDESCprop: (column) => dispatch(changedataDESC(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  numericFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.shape({
    colum: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
  columnOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  getInfo: PropTypes.func.isRequired,
  getByNameprop: PropTypes.func.isRequired,
  getByNumericValueprop: PropTypes.func.isRequired,
  doMoreFilterprop: PropTypes.func.isRequired,
  removeFilterprop: PropTypes.func.isRequired,
  returnColumnprop: PropTypes.func.isRequired,
  sortColumnsprop: PropTypes.func.isRequired,
  changedataASCprop: PropTypes.func.isRequired,
  changedataDESCprop: PropTypes.func.isRequired,

};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getByName,
  getByNumericValue,
  doMoreFilter,
  removeFilter,
  sortColumns,
  changedataASC,
  changedataDESC,
} from '../actions/action';

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const header = ['name', 'population', 'climate', 'diameter', 'created', 'gravity', 'orbital_period', 'rotation_period',
  'surface_water', 'terrain', 'films', 'edited', 'url'];
const comparisonOptions = ['maior que', 'igual a', 'menor que', ''];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: '',
      column: '',
      comparison: '',
      value: '',
      asc: true,
      desc: false,
      ordercolumn: 'name',
    };
  }

  getColumns() {
    const { numericFilter } = this.props;
    const columnsToBeRemoved = numericFilter.map((e) => e.column);
    return ['', ...columns.filter((e) => !columnsToBeRemoved.includes(e))];
  }

  doFilter() {
    const { getByNumericValueprop, doMoreFilterprop } = this.props;
    const { column, comparison, value } = this.state;
    getByNumericValueprop(column, comparison, value);
    doMoreFilterprop(column);
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
    this.setState({ comparison: e.target.value });
  }

  changeValue(e) {
    this.setState({ value: e.target.value });
  }

  doRemoveFilter(e) {
    const { removeFilterprop } = this.props;
    removeFilterprop(e);
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
      <label htmlFor="asc">
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
      <label htmlFor="desc">
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
            {header.map((e) => <option value={e}>{e}</option>)}
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
    const { column, comparison, value } = this.state;
    return (
      <div>
        Selecionar por Valores
        <select value={column} data-testid="column-filter" onChange={(e) => this.changeColum(e)}>
          {this.getColumns().map((e) => <option value={e}>{e}</option>)}
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

  render() {
    return (
      <div className="filters">
        {this.renderNameFilter()}
        {this.renderNumericFilter()}
        {this.renderSelectedFilters()}
        {this.renderSorter()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
  filter: state.filters.filterByName,
  numericFilter: state.filters.filterByNumericValues,
  columnOptions: state.columnsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getByNameprop: (e) => dispatch(getByName(e)),
  getByNumericValueprop:
    (column, comparison, value) => dispatch(getByNumericValue(column, comparison, value)),
  doMoreFilterprop: (column) => dispatch(doMoreFilter(column)),
  removeFilterprop: (filter) => dispatch(removeFilter(filter)),
  sortColumnsprop: (column, sort) => dispatch(sortColumns(column, sort)),
  changedataASCprop: (column) => dispatch(changedataASC(column)),
  changedataDESCprop: (column) => dispatch(changedataDESC(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  numericFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  getByNameprop: PropTypes.func.isRequired,
  removeFilterprop: PropTypes.func.isRequired,
  sortColumnsprop: PropTypes.func.isRequired,
  changedataASCprop: PropTypes.func.isRequired,
  changedataDESCprop: PropTypes.func.isRequired,
  getByNumericValueprop: PropTypes.func.isRequired,
  doMoreFilterprop: PropTypes.func.isRequired,
};

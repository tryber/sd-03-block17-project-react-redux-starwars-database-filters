import React from 'react';
import { connect } from 'react-redux';
import {
  fetchData, getByName, getByNumericValue,
} from '../actions/action';

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

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: '',
      column: 'diameter',
      comparison: 'menor que',
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
    const { getByNumericValue } = this.props;
    const { column, comparison, value } = this.state;
    getByNumericValue(column, comparison, value);
    this.setState({ filterValues: true });
  }

  renderNumericFilter() {
    const { column, comparison, value } = this.state;
    return (
      <div>
        Selecionar por Valores
        <div>
          <select value={column} data-testid="column-filter" onChange={(e) => this.changeColumn(e)}>
            <option value="population">População</option>
            <option value="orbital_period">Período de Órbita</option>
            <option value="diameter">Diâmetro</option>
            <option value="rotation_period">Período de Rotação</option>
            <option value="surface_water">Água Superfecial</option>
          </select>
          <select value={comparison} data-testid="comparison-filter" onChange={(e) => this.changeComparison(e)}>
            <option value="maior que"> Maior que</option>
            <option value="menor que">Menor que</option>
            <option value="igual a">Igual</option>
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
            {filterValues && (numericFilter.comparison === 'menor que') && data.filter((e) => e[numericFilter.column] < parseInt(numericFilter.value, 10)).map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {filterValues && (numericFilter.comparison === 'maior que') && data.filter((e) => e[numericFilter.column] > parseInt(numericFilter.value, 10)).map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {filterValues && (numericFilter.comparison === 'igual a') && data.filter((e) => e[numericFilter.column] === numericFilter.value).map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {!filter && !filterValues && data.map((e) => (
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
  data: state.data,
  filter: state.filters.filterByName,
  numericFilter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchData()),
  getByName: (e) => dispatch(getByName(e)),
  getByNumericValue: (column, comparison, value) => dispatch(getByNumericValue(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

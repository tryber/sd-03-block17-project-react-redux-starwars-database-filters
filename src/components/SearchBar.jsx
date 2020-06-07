import React from 'react';
import { connect } from 'react-redux';
import { filterName, filterNumber, removeFilter } from '../actions';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: 100000,
      columns: [
        { name: 'diameter', value: 'Diameter', display: true },
        { name: 'population', value: 'Population', display: true },
        { name: 'surface_water', value: 'Surface Water', display: true },
        { name: 'orbital_period', value: 'Orbital Period', display: true },
        { name: 'rotation_period', value: 'Rotation Period', display: true },
      ],
    };
  }

  numericFilterPanel = () => {
    const { columns } = this.state;
    return (
      <div>
        <label htmlFor="column-filter">Filtrar por outros:</label>
        <select
          data-testid="column-filter"
          onChange={(e) => this.setState({ column: e.target.value })}
          value={this.state.column}
        >
          {columns.filter((col) => col.display === true)
          .map((col) => <option key={col.name} value={col.name}>{col.value}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(e) => this.setState({ comparison: e.target.value })}
          value={this.state.comparison}
        >
          <option key='<' value="menor que">Menor que</option>
          <option key='=' value="igual a">Igual a</option>
          <option key='>' value="maior que">Maior que</option>
        </select>
        <input
          type="number"
          maxLength="15"
          onChange={(e) => this.setState({ value: e.target.value })}
          value={this.state.value}
          />
      </div>
    )
  }

  manageFilterList = (column, oper) => {
    const { columns } = this.state;
    const i = columns.findIndex((col) => col.name === column);
    const j = columns.find((col) => col.display === true)
    const newState = columns;
    oper ? newState[i].display = true : newState[i].display = false;
    this.setState({ 
      columns: newState,
      column: j.name
    });
  }

  filtersList = (numFilter) => {
    return numFilter.map(({ column, comparison, value }) => (
    <li key={column}>{column} {comparison} {value}
    <button
      onClick={
        () => { this.props.rmFilter(column);
        this.manageFilterList(column, true);
      }}>
      X</button></li>))
  }

  render() {
    const { filterByName, addNumFilter, numFilter } = this.props;
    const { column, comparison, value } = this.state;

    return (
      <div className='filterBar'>
        <div className='filterPanel'>
          <label htmlFor="name-filter">Filtrar por nome</label>
          <input
            data-testid="name-filter"
            name="inputFilter"
            onChange={(e) => { filterByName(e.target.value.toLowerCase()); }}
          />
          {this.numericFilterPanel()}
          <button
            onClick={() => {
              addNumFilter({ column, comparison, value })
              this.manageFilterList(column, false)
            }}
          >Adicionar filtro
          </button>
        </div>
        <div className='filterList'>
          {this.filtersList(numFilter)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.data,
  numFilter: state.filterReducer.filterByNumericValues,
})

const mapDispatchToProps = (dispatch) => (
  {
    filterByName: (evt) => dispatch(filterName(evt)),
    addNumFilter: (evt) => dispatch(filterNumber(evt)),
    rmFilter: (evt) => dispatch(removeFilter(evt)),
  }
);

SearchBar.propTypes = {
  filterByName: PropTypes.func,
  addNumFilter: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

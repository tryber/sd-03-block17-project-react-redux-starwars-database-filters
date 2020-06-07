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
        { name: '', value: 'Coluna', display: true },
        { name: 'diameter', value: 'diameter', display: true },
        { name: 'population', value: 'population', display: true },
        { name: 'surface_water', value: 'surface_water', display: true },
        { name: 'orbital_period', value: 'orbital_period', display: true },
        { name: 'rotation_period', value: 'rotation_period', display: true },
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
          <option />
          <option key='>' value="maior que">maior que</option>
          <option key='=' value="igual a">igual a</option>
          <option key='<' value="menor que">menor que</option>
        </select>
        <input
          data-testid='value-filter'
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

  filtersList = (numericFilter) => {
    return numericFilter.map((filter) => (
    <div
      key={filter.column}
      data-testid='filter'
      >
      {filter.column} {filter.comparison} {filter.value}
    <button
      onClick={
        () => { this.props.rmFilter(filter);
        this.manageFilterList(filter.column, true);
      }}>
      X</button></div>))
  }

  render() {
    const { filterByName, addNumFilter, numericFilter } = this.props;
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
            data-testid='button-filter'
            onClick={() => {
              addNumFilter({ column, comparison, value })
              this.manageFilterList(column, false)
            }}
          >Adicionar filtro
          </button>
        </div>
        <div className='filterList'>
          {this.filtersList(numericFilter)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.data,
  numericFilter: state.filters.filterByNumericValues,
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

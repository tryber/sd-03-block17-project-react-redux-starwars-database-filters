import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterName, filterNumber, removeFilter } from '../actions';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: 100000,
    };
  }

  filtersList(numericFilter) {
    return numericFilter.map((filter) => (
      <div
        key={filter.column}
        data-testid="filter"
      >
        {filter.column} {filter.comparison} {filter.value}
        <button
          onClick={() => { this.props.rmFilter(filter); }}
        >
        X</button>
      </div>
    ));
  }

  numericFilterPanel() {
    return (
      <div>
        <label htmlFor="column-filter">Filtrar por outros:</label>
        {this.renderSelectCol()}
        {this.renderSelectComp()}
        <input
          data-testid="value-filter"
          type="number"
          maxLength="15"
          onChange={(e) => this.setState({ value: e.target.value })}
          value={this.state.value}
        />
      </div>
    );
  }

  renderSelectCol() {
    return (
      <select
        data-testid="column-filter"
        onChange={(e) => this.setState({ column: e.target.value })}
        value={this.state.column}
      >
        <option key="1" value="" />
        { columns.map((column) => (!this.props.numericFilter.find(
          (filter) => filter.column === column)) && (
            <option key={column} value={column}>{column}</option>
          ),
        )}
      </select>
    );
  }

  renderSelectComp() {
    return (
      <select
        data-testid="comparison-filter"
        onChange={(e) => this.setState({ comparison: e.target.value })}
        value={this.state.comparison}
      >
        <option />
        <option key=">" value="maior que">maior que</option>
        <option key="=" value="igual a">igual a</option>
        <option key="<" value="menor que">menor que</option>
      </select>
    );
  }

  render() {
    const { filterByName, addNumFilter, numericFilter } = this.props;
    const { column, comparison, value } = this.state;

    return (
      <div className="filterBar">
        <div className="filterPanel">
          <label htmlFor="name-filter">Filtrar por nome</label>
          <input
            data-testid="name-filter"
            name="inputFilter"
            onChange={(e) => { filterByName(e.target.value.toLowerCase()); }}
          />
          {this.numericFilterPanel()}
          <button
            data-testid="button-filter"
            onClick={() => { addNumFilter({ column, comparison, value }); }}
          >
          Adicionar filtro
          </button>
        </div>
        <div className="filterList">
          {this.filtersList(numericFilter)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.data,
  numericFilter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => (
  {
    filterByName: (evt) => dispatch(filterName(evt)),
    addNumFilter: (evt) => dispatch(filterNumber(evt)),
    rmFilter: (evt) => dispatch(removeFilter(evt)),
  }
);

SearchBar.propTypes = {
  filterByName: PropTypes.func.isRequired,
  numericFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  addNumFilter: PropTypes.func.isRequired,
  rmFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

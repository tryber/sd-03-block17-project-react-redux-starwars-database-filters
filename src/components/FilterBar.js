import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName, activateFilters, filterByNumberValues } from '../actions';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actualFilters: { column: '', comparison: '', value: '' } };
    this.handleSelectColumn = this.handleSelectColumn.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.activateFilter = this.activateFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filters !== this.props.filters) {
      const { filterByNumberValuesTo } = this.props;
      const newDataFiltered = this.concatFilters();
      filterByNumberValuesTo({ data: [...newDataFiltered] });
    }
  }

  concatFilters() {
    const { filters, data } = this.props;
    return filters.filterByNumericValues.reduce((acumulator, {column, comparison, value }) => {
      return acumulator.reduce((dataFiltered, planet) => {
        if (comparison === 'maior que') {
          if ((parseInt(planet[column])) > parseInt(value)) {
            dataFiltered.push(planet);
          }
        }
        else if (comparison === 'menor que') {
          if (parseInt(planet[column]) < parseInt(value)) {
            dataFiltered.push(planet);
          }
        }
        else {
          if (parseInt(planet[column]) === parseInt(value)) {
            dataFiltered.push(planet);
          }
        }
        return dataFiltered;
      }, []);
    }, data);
  }

  activateFilter() {
    const { activateFiltersTo } = this.props;
    activateFiltersTo({ actualFilters: { ...this.state.actualFilters } });
  }

  handleSelectColumn(event) {
    const { value } = event.target;
    this.setState((state) => ({ actualFilters: { ...state.actualFilters, column: value } }));
  }

  handleInterval(event) {
    const { value } = event.target;
    this.setState((state) => ({ actualFilters: { ...state.actualFilters, comparison: value } }));
  }

  handleInput(event) {
    const { value } = event.target;
    this.setState((state) => ({ actualFilters: { ...state.actualFilters, value } }));
  }

  renderFilterBar() {
    return (
      <div>
        <input
          onChange={this.handleInput}
          data-testid="value-filter"type="number" placeholder="Digite um Número"
        />
        <button data-testid="button-filter" onClick={this.activateFilter}>Filtrar</button>
      </div>
    );
  }

  render() {
    const { filterByNameTo } = this.props;
    return (
      <div>
        <form>
          <input
            onChange={(event) => filterByNameTo(event.target.value)}
            data-testid="name-filter"type="text" placeholder="Filtro"
          />
        </form>
        <div>
          <select data-testid="column-filter" onChange={this.handleSelectColumn}>
            <option value="Coluna">Coluna</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select data-testid="comparison-filter" onChange={this.handleInterval}>
            <option value="Select">Intervalo</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          {this.renderFilterBar()}
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  filterByNameTo: (name) => dispatch(filterByName(name)),
  filterByNumberValuesTo: (payload) => dispatch(filterByNumberValues(payload)),
  activateFiltersTo: (payload) => dispatch(activateFilters(payload)),
});

const mapStateToProps = (state) => ({
  filters: state.filters,
  data: state.data,
});

FilterBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    population: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    gravity: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  filters: PropTypes.shape({
    filterByName: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    filterByNumericValues: PropTypes.arrayOf(PropTypes.shape({
      column: PropTypes.string.isRequired,
      comparison: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  filterByNameTo: PropTypes.func.isRequired,
  filterByNumberValuesTo: PropTypes.func.isRequired,
  activateFiltersTo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);

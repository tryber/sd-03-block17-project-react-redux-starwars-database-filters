import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName, filterInNumberValues, filterByNumberValues } from '../actions';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actualFilters: {} }
    this.handleSelectColumn = this.handleSelectColumn.bind(this)
    this.handleInterval = this.handleInterval.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.activateFilter = this.activateFilter.bind(this);
  }

  handleSelectColumn(event) {
    const { value } = event.target;
    this.setState((state) => ({ actualFilters: {...state.actualFilters, column: value } }));
  }

  handleInterval(event) {
    const { value } = event.target;
    this.setState((state) => ({ actualFilters: {...state.actualFilters, comparison: value } }));
  }

  handleInput(event) {
    const { value } = event.target;
    this.setState((state) => ({ actualFilters: {...state.actualFilters, value } }));
  }

  activateFilter() {
    const { actualFilters: { column, comparison, value } } = this.state;
    const { filterByNumberValues, dataFiltered } = this.props;
    const newDataFiltered = dataFiltered.reduce((data, planet) => {
      if (comparison === 'maior que') {
        if ((parseInt(planet[column])) > parseInt(value)) data.push(planet);
      }
      else if (comparison === 'menor que') {
        if (parseInt(planet[column]) < parseInt(value)) data.push(planet);
      }
      else {
        if (parseInt(planet[column]) === parseInt(value)) data.push(planet);
      }
      return data;
    }, []);
    filterByNumberValues({ dataFiltered: [...newDataFiltered], actualFilters: { ...this.state.actualFilters } });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { filterInNumberValuesTo } = this.props;
  //   if (prevState.actualFilters !== this.state.actualFilters) {
  //     filterInNumberValuesTo(this.state.actualFilters);
  //   }
  // }

  // activateFilter() {
  //   const { filterInNumberValuesTo } = this.props;
  //   filterInNumberValuesTo(this.state.actualFilters);
  // }

  render() {
    const { filterByNameTo } = this.props;
    const { actualFilters } = this.state;
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
          <input
            onChange={this.handleInput}
            data-testid="value-filter"type="number" placeholder="Digite um Número"
          />
          <button data-testid="button-filter" onClick={this.activateFilter}>Filtrar</button>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  filterByNameTo: (name) => dispatch(filterByName(name)),
  filterInNumberValuesTo: (payload) => dispatch(filterInNumberValues(payload)),
  filterByNumberValues: (payload) => dispatch(filterByNumberValues(payload)),
});

const mapStateToProps = (state) => ({
  filters: state.filters,
  dataFiltered: state.dataFiltered,
})


FilterBar.propTypes = {
  filterByNameTo: PropTypes.func.isRequired,
  filterInNumberValuesTo: PropTypes.func.isRequired,
  filterByNumberValues: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);

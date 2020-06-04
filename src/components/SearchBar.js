import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanetsByNumericValues } from '../actions';
import NameFilter from './ColumnFilter';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <NameFilter />
        <div>
          <label htmlFor="filter">Filter By Numeric Value:</label>
          <select id="filter" onChange={(event) => this.handleChange(event, 'column')} data-testid="column-filter">
            <option value="" />
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select onChange={(event) => this.handleChange(event, 'comparison')} data-testid="comparison-filter">
            <option value="" />
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input type="number" data-testid="value-filter" onChange={(event) => this.handleChange(event, 'value')} />
          <button
            data-testid="button-filter"
            onClick={() => this.props.filterPlanetsByNumericValues(this.state)}
          >Filter</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByNumericValues: (estado) => dispatch(filterPlanetsByNumericValues(estado)),
});

SearchBar.propTypes = {
  filterPlanetsByNumericValues: PropTypes.func,
};

SearchBar.defaultProps = {
  filterPlanetsByNumericValues: null,
};

export default connect(null, mapDispatchToProps)(SearchBar);

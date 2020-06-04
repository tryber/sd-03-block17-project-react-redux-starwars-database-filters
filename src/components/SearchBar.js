import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanetsByName, filterPlanetsByNumericValues } from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => this.props.filterPlanetsByName(event.target.value.toLowerCase())}
        />
        <div>
          <label>Filter By Numeric Value:</label>
          <select onChange={(event) => this.handleChange(event, 'column')} data-testid='column-filter'>
            <option value=""></option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select onChange={(event) => this.handleChange(event, 'comparison')} data-testid='comparison-filter'>
            <option value=""></option>
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input type='number' data-testid='value-filter' onChange={(event) => this.handleChange(event, 'value')}/>
          <button 
          data-testid='button-filter' 
          onClick={() => this.props.filterPlanetsByNumericValues(this.state)}
          >Filter</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByName: (value) => dispatch(filterPlanetsByName(value)),
  filterPlanetsByNumericValues: (estado) => dispatch(filterPlanetsByNumericValues(estado))
});

SearchBar.propTypes = {
  filterPlanetsByName: PropTypes.func,
  filterPlanetsByNumericValues: PropTypes.func,
};

SearchBar.defaultProps = {
  filterPlanetsByName: null,
  filterPlanetsByNumericValues: null,
};

export default connect(null, mapDispatchToProps)(SearchBar);

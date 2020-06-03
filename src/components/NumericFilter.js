import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class NumericFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'Maior que',
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type,value) {
    this.setState({
      [type]: value
    });
  }

  render() {
    const { getPlanetByNumericValues } = this.props;
    return (
      <div>
        <label htmlFor="column-filter">Filtre por coluna</label>
        <select data-testid="column-filter" name="column-filter"
          onChange={(e) => this.handleChange('column',e.target.value)}
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <label htmlFor="comparison-filter"></label>
        <select data-testid="comparison-filter" name="comparison-filter"
          onChange={(e) => this.handleChange('comparison',e.target.value)}
        >
          <option value="Maior que">Maior que</option>
          <option value="Menor que">Menor que</option>
          <option value="Igual a">Igual a</option>
        </select>
        <label htmlFor="value-filter"></label>
        <input data-testid='value-filter' type="number" maxLength="12"
          onChange={(e) => this.handleChange("value",Number(e.target.value))}
        />
        <button data-testid="button-filter"
          onClick={() => getPlanetByNumericValues(this.state)}>Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetByNumericValues: (data) => dispatch(actions.filterByNumericValues(data)),  
});
  
export default connect(null, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  getPlanetByNumericValues: PropTypes.func.isRequired,
};

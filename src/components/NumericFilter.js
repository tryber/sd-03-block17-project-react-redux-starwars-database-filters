import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

const columnOptions = [
  'select a collum',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = [
  'select',
  'maior que',
  'igual a',
  'menor que',
];

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

  handleChange(type, value) {
    this.setState({
      [type]: value,
    });
  }

  render() {
    const { getPlanetByNumericValues } = this.props;
    return (
      <div>
        <label htmlFor="column-filter">Filtre por coluna</label>
        <select
          data-testid="column-filter" name="column-filter"
          onChange={(e) => this.handleChange('column', e.target.value)}
        >
          {columnOptions.map((e) => <option value={e}>{e}</option>)}
        </select>
        <label htmlFor="comparison-filter">Condição</label>
        <select
          data-testid="comparison-filter" name="comparison-filter"
          onChange={(e) => this.handleChange('comparison', e.target.value)}
        >
          {comparisonOptions.map((e) => <option value={e}>{e}</option>)}
        </select>
        <label htmlFor="value-filter">Valor</label>
        <input
          data-testid="value-filter" type="number" maxLength="12"
          onChange={(e) => this.handleChange('value', e.target.value)}
        />
        <button
          data-testid="button-filter"
          onClick={() => getPlanetByNumericValues(this.state)}
        >Filtrar</button>
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

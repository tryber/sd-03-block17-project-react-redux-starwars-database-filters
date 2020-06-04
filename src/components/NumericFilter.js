import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import * as actions from '../actions/index';
import store from '../store/index';

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

let showFilter = true;

class NumericFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterMenu = this.filterMenu.bind(this);
  }

  handleChange(type, value) {
    this.setState({
      [type]: value,
    });
  }

  
  filterMenu() {
    store.subscribe(() => {
      const { column } = this.state;
      let columnPos = columnOptions.indexOf(column);
      if (columnPos > 0) {
        columnOptions.splice(columnPos, 1);
      }
    });
  }

  render() {
    this.filterMenu();
    (columnOptions.length > 1) ? showFilter = true : showFilter = false;

    const { getPlanetByNumericValues, filterByNumericValues } = this.props;
    return (
      <div>
        {showFilter &&
        <div>
          <label htmlFor="column-filter">Filtre por coluna</label>
          <select
            data-testid="column-filter" name="column-filter"
            onChange={(e) => this.handleChange('column', e.target.value)}
          >
            {columnOptions.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
          <label htmlFor="comparison-filter">Condição</label>
          <select
            data-testid="comparison-filter" name="comparison-filter"
            onChange={(e) => this.handleChange('comparison', e.target.value)}
          >
            {comparisonOptions.map((e) => <option key={e} value={e}>{e}</option>)}
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
        }
        <div>
          {filterByNumericValues.map(({ column, comparison, value }) => {
            if (column !== '' && comparison !== '' && value !== '') {
              return <div key={`${column} Filter`}><span>{`Filter: ${column} ${comparison} ${value}`}</span></div>
            }
            return undefined;
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetByNumericValues: (data) => dispatch(actions.filterByNumericValues(data)),
});

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  getPlanetByNumericValues: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(object),
};

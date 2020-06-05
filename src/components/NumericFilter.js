import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

const columnOptions = [
  'select column',
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

let newColumnOptions = [...columnOptions];

let showFilter = true;

const verifyColumns = (obj) => {
  if (obj.length > 1) {
    showFilter = true;
  } else {
    showFilter = false;
  }
};

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
    this.filterForms = this.filterForms.bind(this);
  }

  handleChange(type, value) {
    this.setState({
      [type]: value,
    });
  }

  filterMenu() {
    const { filterByNumericValues } = this.props;
    // Thanks for topic
    // https://stackoverflow.com/
    // questions/14515382/javascript-compare-two-arrays-return-differences-but
    const filterColumnArray = filterByNumericValues.map(({ column }) => column);
    newColumnOptions = [...columnOptions];
    let index;
    for (let i = 0; i < filterColumnArray.length; i += 1) {
      index = newColumnOptions.indexOf(filterColumnArray[i]);
      if (index > -1) {
        newColumnOptions.splice(index, 1);
      }
    }
  }

  filterForms() {
    const { getPlanetByNumericValues } = this.props;
    return (
      <div>
        <label htmlFor="column-filter">Filtre por coluna</label>
        <select
          data-testid="column-filter" name="column-filter"
          onChange={(e) => this.handleChange('column', e.target.value)}
        >
          {newColumnOptions.map((e) => <option key={e} value={e}>{e}</option>)}
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
          data-testid="button-filter" onClick={() => getPlanetByNumericValues(this.state)}
        >Filtrar</button>
      </div>
    );
  }

  render() {
    this.filterMenu();
    verifyColumns(columnOptions);
    return (
      <div>
        {showFilter && this.filterForms()}
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

NumericFilter.defaultProps = {
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

NumericFilter.propTypes = {
  getPlanetByNumericValues: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
};

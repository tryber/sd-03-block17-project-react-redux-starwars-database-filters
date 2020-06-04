import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitNumericFilter } from '../actions/submitNumFilter';

const columnFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class FilterSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '0',
    };
  }

  handleFilterChange(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

  render() {
    const {
      state,
      props: { submitFilter, filters },
    } = this;
    return (
      <div>
        <select required onChange={(event) => this.handleFilterChange(event, 'column')} data-testid="column-filter">
          <option value=""> </option>
          {columnFilter.map(
            (option) => !filters.find(({ column }) => column === option) && (
            <option>{option}</option>
            ),
          )}
        </select>
        <select required onChange={(event) => this.handleFilterChange(event, 'comparison')} testid="comparison-filter">
          <option value=""> </option>
          <option value="Maior que">Maior que</option>
          <option value="Menor que">Menor que</option>
          <option value="Igual a">Igual a</option>
        </select>
        <input
          value="0"
          onChange={(event) => this.handleFilterChange(event, 'value')}
          data-testid="value-filter"
          type="number"
        />
        <button onClick={() => submitFilter({ state })} type="button" data-testid="button-filter">
          Add filter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const columnFitlerChoosed = state.filters.filterByNumericValues;
  return {
    filters: columnFitlerChoosed,
  };
};

const mapDispatchToProps = (dispatch) => ({
  submitFilter: (args) => dispatch(submitNumericFilter(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelectors);

FilterSelectors.propTypes = {
  submitFilter: propTypes.func.isRequired,
  filters: propTypes.arrayOf(propTypes.object).isRequired,
};

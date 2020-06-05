import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitNumericFilter } from '../actions/submitNumFilter';

export const columnFilter = [
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
    const { state, props: { submitFilter, filters } } = this;
    return (
      <div>
        <select required onChange={(event) => this.handleFilterChange(event, 'column')} data-testid="column-filter">
          <option />
          {columnFilter.map(
            (option) => !filters.find(({ column }) => column === option) && (
            <option>{option}</option>
            ),
          )}
        </select>
        <select required onChange={(event) => this.handleFilterChange(event, 'comparison')} data-testid="comparison-filter">
          <option />
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          defaultValue="0"
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

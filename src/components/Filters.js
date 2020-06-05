import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { queryByName, saveFilters } from '../actions';

class Filters extends Component {
  static renderOptions(array) {
    return (
      array.map((e) => <option>{e}</option>)
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      columnSelector: 'population',
      comparisonSelector: 'maior que',
      valueFilter: 0,
    };
  }

  handle(event, stateId) {
    this.setState({ [stateId]: event.target.value });
  }

  btn() {
    const { columnSelector, comparisonSelector, valueFilter } = this.state;
    this.props.handleFilterBtn(columnSelector, comparisonSelector, valueFilter);
  }

  render() {
    const { hdlQry } = this.props;
    const colArray = ['select', 'population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    const compArray = ['select', 'maior que', 'menor que', 'igual a'];
    return (
      <div className="filters">
        <label htmlFor="name-in">Filtrar por nome</label>
        <input id="name-in" data-testid="name-filter" type="text" onChange={(e) => hdlQry(e)} />
        <select
          data-testid="column-filter"
          onChange={(e) => this.handle(e, 'columnSelector')}
        >
          {Filters.renderOptions(colArray)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(e) => this.handle(e, 'comparisonSelector')}
        >
          {Filters.renderOptions(compArray)}
        </select>
        <input
          data-testid="value-filter" type="number"
          onChange={(e) => this.handle(e, 'valueFilter')}
        />
        <button type="button" data-testid="button-filter" onClick={() => this.btn()}>Filtr</button>
      </div>
    );
  }
}

Filters.propTypes = {
  hdlQry: PropTypes.func.isRequired,
  handleFilterBtn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  hdlQry: (event) => dispatch(queryByName(event.target.value)),
  handleFilterBtn: (column, comparison, value) => dispatch(saveFilters(column, comparison, value)),
});

export default connect(null, mapDispatchToProps)(Filters);

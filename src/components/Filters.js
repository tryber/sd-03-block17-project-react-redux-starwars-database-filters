import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { queryByName, saveFilters } from '../actions';

class Filters extends Component {
  static renderOptions(array, state) {
    return (
      array.map(function (e) {
        return (state.includes(e)) ? false : <option>{e}</option>;
      })
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
    const { hdlQry, okFilters } = this.props;
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
          {Filters.renderOptions(colArray, okFilters)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(e) => this.handle(e, 'comparisonSelector')}
        >
          {Filters.renderOptions(compArray, okFilters)}
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
  okFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  hdlQry: (event) => dispatch(queryByName(event.target.value)),
  handleFilterBtn: (column, comparison, value) => dispatch(saveFilters(column, comparison, value)),
});

const mapStateToProps = (state) => ({
  okFilters: state.filters.usedFilters,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

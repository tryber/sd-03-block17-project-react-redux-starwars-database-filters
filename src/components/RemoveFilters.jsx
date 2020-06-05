import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFilters } from '../action/index';

class RemoveFilters extends Component {
  remove = (lista) => {
    const { removed } = this.props;
    return (
      <p
        data-testid="filter"
      >
        <span>{lista.column}</span>
        <span>{lista.comparison}</span>
        <span>{lista.value}</span>
        <button
          type="button"
          onClick={() => removed(lista)}
        >
          x
      </button>
      </p>
    )
  }

  render() {
    const { filters } = this.props;
    const infoFilters = filters.filter((e) => e.column !== '')
    return (
      <div>
        <h1 data-testid="filter">Tesadtste</h1>
        {infoFilters && infoFilters.map((e) => {
          this.remove(e)
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removed: (e) => dispatch(removeFilters(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);

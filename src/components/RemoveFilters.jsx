import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { removeFilters } from '../action/index';

class RemoveFilters extends Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove(lista) {
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
    );
  }

  render() {
    const { filters } = this.props;
    const infoFilters = filters.filter((e) => e.column !== '');
    return (
      <div>
        <h1>Remover</h1>
        {infoFilters.map((e) => this.remove(e))}
      </div>
    );
  }
}

RemoveFilters.propTypes = {
  filters: PropType.arrayOf(
    PropType.shape({
      column: PropType.string,
      comparison: PropType.string,
      value: PropType.string,
    }),
  ).isRequired,
  removed: PropType.func.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removed: (e) => dispatch(removeFilters(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);

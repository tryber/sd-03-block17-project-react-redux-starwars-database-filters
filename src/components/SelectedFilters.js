import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFilter } from '../actions/index';

class SelectedFilters extends Component {
  mapSpan() {
    const { numericValues, deleteItem } = this.props;
    return numericValues.map((filter) =>
      (
        <span
          className="tag is-dark is-normal"
          data-testid="filter"
          key={filter.column}
        >
          {filter.column}-{filter.comparison}-{filter.value}
          <button
            className="delete is-normal"
            id={filter.column}
            onClick={(e) => deleteItem(e.target.id)}
          >
            X
          </button>
        </span>
      ));
  }

  render() {
    return <span>{this.mapSpan()}</span>;
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (e) => dispatch(deleteFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);

SelectedFilters.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

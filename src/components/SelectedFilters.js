import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFilter } from '../actions/index';

class SelectedFilters extends Component {
  render() {
    const { numericValues, deleteFilter } = this.props;
    return (
      <span>
        {numericValues.map((filter) => {
          return (
            <span className='tag is-dark is-normal' data-testid='filter' key={filter.column}>
              {filter.column}-{filter.comparison}-{filter.value}
              <button
                className='delete is-normal'
                id={filter.column}
                onClick={(e) => deleteFilter(e.target.id)}
              >
                X
              </button>
            </span>
          );
        })}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (e) => dispatch(deleteFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFilters } from '../Actions';
import PropTypes from 'prop-types';

class RemoveFilters extends Component {
  constructor(props) {
    super(props);
    this.displayFilters = this.displayFilters.bind(this);
  }

  displayFilters(list) {
    const { removed } = this.props;
    return (
      <p key={list.column} data-testid="filter">
        <span>{list.column}</span>
        <span>{list.comparison}</span>
        <span>{list.value}</span>
        <button type="button" onClick={() => removed(list)}>
          X
        </button>
      </p>
    );
  }

  render() {
    const { filters } = this.props;
    const infoFilters = filters.filter((ele) => ele.column !== '');
    return (
      <div>
        <h1>Used Filters</h1>
        {infoFilters.map((filter) => this.displayFilters(filter))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removed: (value) => dispatch(removeFilters(value)),
});

RemoveFilters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  removed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);

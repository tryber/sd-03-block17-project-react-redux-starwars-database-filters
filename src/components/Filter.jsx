import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function Filter({
  column, comparison, value, handleClick,
}) {
  function click() {
    handleClick(column);
  }
  return (
    <div>
      <span>{column}</span>
      <span>{comparison}</span>
      <span>{value}</span>
      <div data-testid="filter">
        <span>{ }</span>
        <button onClick={click} type="button">x</button>
      </div>

    </div>
  );
}

Filter.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});


const mapDispatchToProps = {
  handleClick: (payload) => ({ type: 'DELETE_FILTER', payload }),

};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

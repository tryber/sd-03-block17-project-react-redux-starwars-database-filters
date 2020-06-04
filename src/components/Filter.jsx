import React, { Component } from 'react';
import { connect } from 'react-redux';

export function Filter({
  column, comparison, value, handleClick, filters,
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
        <span>{column}</span>
        <button onClick={click} type="button">x</button>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});


const mapDispatchToProps = {
  handleClick: (payload) => ({ type: 'DELETE_FILTER', payload }),

};

export default connect(null, mapDispatchToProps)(Filter);

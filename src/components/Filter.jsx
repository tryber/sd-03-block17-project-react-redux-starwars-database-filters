import React, { Component } from 'react';
import { connect } from 'react-redux';

export function Filter({
  column, comparison, value, handleClick, setFilters, filtersArray,
}) {
  function click() {
    handleClick({ type: 'add', pay: { filter: column } });
    setFilters(filtersArray.filter((e) => e.column !== column));
  }
  return (
    <div>
      <span>{column}</span>
      <span>{comparison}</span>
      <span>{value}</span>
      <button onClick={click} type="button" data-testid="filter">x</button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
// });


const mapDispatchToProps = {
  handleClick: (payload) => ({ type: 'CHANGE_CATEGORY', payload }),

};

export default connect(null, mapDispatchToProps)(Filter);

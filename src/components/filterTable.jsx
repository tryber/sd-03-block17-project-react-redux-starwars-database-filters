import React from 'react';
// import PropTypes from 'prop-types';

export default function filterTable() {
  return (
    <div>
      <input id="name-filter" data-testid="name-filter" type="text" />
      <label htmlFor="name-filter">Search Planets</label>
    </div>
  );
}

// filterTable.propTypes = {};

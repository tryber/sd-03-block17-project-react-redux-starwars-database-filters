import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/NumFilterActions';

const FilterSetted = ({ id, column, comparison, value, removeFilter }) => (
  <div data-testid="filter" className="filters container">
    <span>{column} | {comparison} | {value}</span>
    <button
      className="radius-border filter-button"
      type="button"
      onClick={() => removeFilter(id)}
    >
      X
    </button>
  </div>
);

FilterSetted.propTypes = {
  id: PropTypes.number.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (id) => dispatch(actions.removeFilter(id)),
});

export default connect(null, mapDispatchToProps)(FilterSetted);

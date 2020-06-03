import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/NumFilterActions';

function FilterSetted({ id, column, comparison, value, removeFilter }) {
  return (
    <div data-testid="filter">
      <p key={column}>
        <span>{column} | {comparison} | {value}</span>
      </p>
      <button type="button" onClick={() => removeFilter(id)}>X</button>
    </div>
  )
}

FilterSetted.propTypes = {
  id: PropTypes.number.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (id) => dispatch(actions.removeFilter(id)),
});

export default connect(null, mapDispatchToProps)(FilterSetted);

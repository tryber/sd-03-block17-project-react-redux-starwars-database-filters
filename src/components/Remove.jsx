import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilterNumeric } from '../actions';

function Remove({ nmericValues, removeNumeric }) {
  const onClick = (type) => removeNumeric(type);
  return nmericValues.map((type) => (
    <div data-testid="filter" key={type.column}>
      <span>
        {type.column} - {type.comparison} - {type.value}
      </span>
      <button type="button" onClick={() => onClick(type)}>
        X
      </button>
    </div>
  ));
}

const mapStateToProps = (state) => ({
  nmericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeNumeric: (type) => dispatch(removeFilterNumeric(type)),
});

Remove.propTypes = {
  nmericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  removeFilterNumeric: PropTypes.func.isRequired,
  removeNumeric: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Remove);

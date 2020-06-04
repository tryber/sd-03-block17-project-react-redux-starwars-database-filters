import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterByName } from '../actions/textInputActions';

const InputFilter = ({
  dispatchInput, value,
}) => (
  <input
    data-testid="name-filter"
    onChange={(e) => dispatchInput((e.target.value))}
    value={value}
  />
);

const mapDispatchToPros = (dispatch) => ({
  dispatchInput: (text) => dispatch(filterByName(text)),
});

const mapStateToProps = (state) => ({
  value: state.filters.filterByName.name,
});
export default connect(mapStateToProps, mapDispatchToPros)(InputFilter);

InputFilter.propTypes = {
  dispatchInput: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

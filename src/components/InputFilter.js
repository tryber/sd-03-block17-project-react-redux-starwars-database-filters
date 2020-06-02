import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterByName } from '../actions/textInputActions';

const InputFilter = ({ dispatchInput }) => <input data-testid="name-filter" onChange={(e) => dispatchInput((e.target.value))} />;
const mapDispatchToPros = (dispatch) => ({
  dispatchInput: (text) => dispatch(filterByName(text)),
});
export default connect(null, mapDispatchToPros)(InputFilter);

InputFilter.propTypes = {
  dispatchInput: propTypes.func.isRequired,
};

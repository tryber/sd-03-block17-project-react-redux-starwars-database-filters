import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/NumFilterActions';
import * as constants from '../services/constants';

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const renderSelectOf = (name, value, optionsList, callback) => (
  <label htmlFor={name} className="container">
    {name}
    <select
      className="radius-border"
      data-testid={`${name}-filter`}
      defaultValue={value}
      id={name}
      name={name}
      onChange={({ target: { value: nextValue } }) => callback(name, nextValue)}
    >
      {constants.renderOptions(optionsList)}
    </select>
  </label>
);

const NumFilter = (
  { columnOptions, column, comparison, value, onChange, createFilter },
) => (
  <fieldset className="container">
    <span>Filter by Numeric Params</span>
    {renderSelectOf('column', column, columnOptions, onChange)}
    {renderSelectOf('comparison', comparison, comparisonOptions, onChange)}
    <label htmlFor="value-filter" className="container">
      number
      <input
        className="radius-border"
        data-testid="value-filter"
        defaultValue={value}
        id="value-filter"
        name="value-filter"
        onChange={({ target }) => onChange('value', target.value)}
        type="number"
      />
    </label>
    <button
      className="radius-border filter-button"
      data-testid="button-filter"
      type="button"
      onClick={() => createFilter()}
    >
      Activate
    </button>
  </fieldset>
);

NumFilter.propTypes = {
  columnOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  createFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filters: { inProgress } }) => ({ ...inProgress });

const mapDispatchToProps = (dispatch) => ({
  onChange: (filter, value) => dispatch(actions.changeValue(filter, value)),
  createFilter: () => dispatch(actions.createFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumFilter);

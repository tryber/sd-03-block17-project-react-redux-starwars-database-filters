import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/orderActions';
import * as constants from '../services/constants';

const renderRadio = (value, text, callback) => (
  <label htmlFor={`sort-radio-${value}`}>
    {text}
    <input
      className="radius-border"
      data-testid="column-sort-input"
      id={`sort-radio-${value}`}
      name="sort-filter-radio"
      onChange={() => callback('sort', value)}
      type="radio"
      value={value}
    />
  </label>
);

const OrderFilters = ({ columnValue, change, applyOrder, headers }) => (
  <fieldset className="container">
    <span>Order By Column</span>
    <div className="">
      {renderRadio('ASC', 'Ascendent', change)}
      {renderRadio('DESC', 'Descendent', change)}
      <label htmlFor="column-order" className="container">
        column
        <select
          className="radius-border"
          data-testid="column-sort"
          defaultValue={columnValue}
          id="column-order"
          name="column-order"
          onChange={({ target: { value } }) => change('column', value)}
        >
          {constants.renderOptions(headers)}
        </select>
      </label>
      <button
        className="radius-border filter-button"
        data-testid="column-sort-button"
        onClick={() => applyOrder()}
        type="button"
      >
        Apply Order
      </button>
    </div>
  </fieldset>
);

OrderFilters.propTypes = {
  columnValue: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  change: PropTypes.func.isRequired,
  applyOrder: PropTypes.func.isRequired,
};

const mapStateToProps = ({ headers, filters: { order } }) => ({
  columnValue: order.column,
  headers,
});

const mapDispatchToProps = (dispatch) => ({
  change: (prop, value) => dispatch(actions.changeOrder(prop, value)),
  applyOrder: () => dispatch(actions.activateOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilters);

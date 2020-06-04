import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/orderActions';
import * as constants from '../services/constants';

const renderRadio = (value, text, callback) => (
  <label htmlFor="sort-filter-radio">
    {text}
    <input
      data-testid="column-sort-input"
      id={value}
      name="sort-filter-radio"
      onChange={() => callback('sort', value)}
      type="radio"
      value={value}
    />
  </label>
);

const OrderFilters = ({ columnValue, change, refPlanet, applyOrder }) => {
  const optionsList = Object.keys(refPlanet).filter((key) => key !== 'residents');
  return (
    <div>
      <label htmlFor="column-order">
        <select
          data-testid="column-sort"
          defaultValue={columnValue}
          id="column-order"
          name="column-order"
          onChange={({ target: { value } }) => change('column', value)}
        >
          {constants.renderOptions(optionsList)}
        </select>
      </label>
      {renderRadio('ASC', 'Ascendent', change)}
      {renderRadio('DESC', 'Descendent', change)}
      <button
        data-testid="column-sort-button"
        onClick={() => applyOrder()}
        type="button"
      >Apply Order</button>
    </div>
  );
};

OrderFilters.propTypes = {
  columnValue: PropTypes.string.isRequired,
  refPlanet: PropTypes.shape(constants.planetShape()).isRequired,
  change: PropTypes.func.isRequired,
  applyOrder: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data, filters: { order } }) => ({
  columnValue: order.column,
  refPlanet: data[0],
});

const mapDispatchToProps = (dispatch) => ({
  change: (prop, value) => dispatch(actions.changeOrder(prop, value)),
  applyOrder: () => dispatch(actions.activateOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilters);

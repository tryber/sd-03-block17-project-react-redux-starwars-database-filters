import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/orderActions';
import * as funcAPI from '../services/functions';

const OrderFilters = ({ columnValue, radioValue, change, refPlanet, applyOrder }) => {
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
        >{funcAPI.renderOptions(optionsList)}</select>
      </label>
      <label>
        Ascendente
        <input
          data-testid="column-sort-input"
          name="sort"
          onChange={() => change('sort', 'ASC')}
          type="radio"
          value="ASC"
        />
      </label>
      <label>
        Descendente
        <input
          data-testid="column-sort-input"
          name="sort"
          onChange={() => change('sort', 'DESC')}
          type="radio"
          value="DESC"
        />
      </label>
      <button
        data-testid="column-sort-button"
        onClick={() => applyOrder()}
        type="button"
      >Apply Order</button>
    </div>
  );
}

OrderFilters.propTypes = {
  columnValue: PropTypes.string.isRequired,
  radioValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data, filters: { order } }) => ({
  columnValue: order.column,
  radioValue: order.sort,
  refPlanet: data[0],
});

const mapDispatchToProps = (dispatch) => ({
  change: (prop, value) => dispatch(actions.changeOrder(prop, value)),
  applyOrder: () => dispatch(actions.activateOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilters);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const head = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function OrderFilter({ categories, order, sendData }) {
  const [column, setColumn] = useState(order.column);
  const [sort, setOrder] = useState(order.sort);

  return (
    <div>
      <select value={column} onChange={(e) => setColumn(e.target.value)} data-testid="column-sort">
        {head.map((categorie) => <option value={categorie}>{categorie}</option>)}
      </select>
      <input
        checked={sort === 'ASC'}
        data-testid="column-sort-input"
        type="radio"
        name="order"
        id="ASC"
        value="ASC"
        onChange={() => setOrder('ASC')}
      />
      <label htmlFor="ASC">ASC</label>
      <input
        onChange={() => setOrder('DSC')}
        checked={sort === 'DSC'}
        data-testid="column-sort-input"
        type="radio"
        name="order"
        id="DESC"
        value="DESC"
      />
      <label htmlFor="DESC">DSC</label>
      <button onClick={() => sendData({ column, sort })} data-testid="column-sort-button" type="button">Filter</button>

    </div>
  );
}

OrderFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  order: PropTypes.objectOf(PropTypes.string).isRequired,
  sendData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  order: state.filters.order,

});

const mapDispatchToProps = {
  sendData: (payload) => ({ type: 'SET_ORDER', payload }),

};

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilter);

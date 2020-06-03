import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function FilterComp({
  filterArray, setNumericFilter, filters, id = 0, fireFilter,
}) {
  return (

    <div>
      <select
        value={filters[id].column || filterArray[0]}
        data-testid="column-filter"
        onChange={(e) => setNumericFilter(e.target.value, 'column', id)}
      >
        {filterArray.map(({ filter, name }) => <option key={filter} value={filter}>{name}</option>)}
      </select>

      <select
        value={filters[id].comparison || 'Maior que'}
        data-testid="comparison-filter"
        onChange={(e) => setNumericFilter(e.target.value, 'comparison', id)}
      >
        <option value="Maior que">Maior que</option>
        <option value="Menor que">Menor que</option>
        <option value="Igual a">Igual a</option>

      </select>

      <input
        value={filters[id].value || ''}
        onChange={(e) => setNumericFilter(e.target.value, 'value', id)}
        data-testid="value-filter"
        type="number"
      />

      <button onClick={() => fireFilter(id)} type="button" data-testid="button-filter">Filtrar</button>

    </div>
  );
}

FilterComp.propTypes = {
  filterArray: PropTypes.isRequired,
  setNumericFilter: PropTypes.isRequired,
  filters: PropTypes.isRequired,
  id: PropTypes.isRequired,
  fireFilter: PropTypes.isRequired,

};


const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

function NumericFilter(value, type, id) {
  return { type: 'SET_NUMERIC_FILTER', payload: { value, type, id } };
}

const mapDispatchToProps = {
  setNumericFilter: (value, type, id) => NumericFilter(value, type, id),
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComp);

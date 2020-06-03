import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from './Filter';


const array = [
  { filter: 'population', name: 'Population' },
  { filter: 'orbital_period', name: 'Período orbital' },
  { filter: 'diameter', name: 'Diâmetro' },
  { filter: 'rotation_period', name: 'Periodo Rotacional' },
  { filter: 'surface_water', name: 'Agua na superfície' },
];

function FilterComp({
  setNumericFilter, filters, fireFilter, changeId, categories, changeCategory,
}) {
  const [filtersArray, setFilters] = React.useState([]);
  const [id, setId] = React.useState(0);
  const ref = React.useRef();
  function handleClick() {
    fireFilter(id);
    setFilters(filters);
    changeId(1);
    setId((previd) => previd + 1);

    changeCategory({ type: 'remove', pay: ref.current.value });
  }

  return (
    <div>

      {filtersArray.map((e) => (
        <Filter
          setFilters={setFilters}
          filtersArray={filtersArray}
          {...e}
        />
      ))}

      <select
        ref={ref}
        value={(filters[id] && filters[id].column) || 'select'}
        data-testid="column-filter"
        onChange={(e) => setNumericFilter(e.target.value, 'column', id)}
      >
        <option value="select">Escolha um</option>
        {categories.map(({ filter }) => <option key={filter} value={filter}>{filter}</option>)}
      </select>

      <select
        value={(filters[id] && filters[id].comparison) || 'choose'}
        data-testid="comparison-filter"
        onChange={(e) => setNumericFilter(e.target.value, 'comparison', id)}
      >
        <option value="choose">Choose One</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>

      <input
        value={(filters[id] && filters[id].value) || ''}
        onChange={(e) => setNumericFilter(e.target.value, 'value', id)}
        data-testid="value-filter"
        type="number"
      />

      <button
        onClick={handleClick}
        type="button"
        data-testid="button-filter"
      >
        Filtrar

      </button>

    </div>
  );
}

FilterComp.propTypes = {
  setNumericFilter: PropTypes.isRequired,
  filters: PropTypes.isRequired,
  id: PropTypes.isRequired,
  fireFilter: PropTypes.isRequired,
  changeId: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeCategory: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
  categories: state.categories,
});

function NumericFilter(value, type, id) {
  return { type: 'SET_NUMERIC_FILTER', payload: { value, type, id } };
}

const mapDispatchToProps = {
  setNumericFilter: (value, type, id) => NumericFilter(value, type, id),
  changeId: (payload) => ({ type: 'CHANGE_ID', payload }),
  changeCategory: (payload) => ({ type: 'CHANGE_CATEGORY', payload }),
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComp);

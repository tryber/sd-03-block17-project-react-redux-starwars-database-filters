import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from './Filter';

function FilterComp({
  setNumericFilter, filters, fireFilter, changeId, categories, changeCategory,
}) {
  const [filtersArray, setFilters] = React.useState([]);

  const [column, setColumn] = React.useState('select');
  const [comparison, setcomparison] = React.useState('choose');
  const [value, setValue] = React.useState('');
  const [id, setId] = React.useState(0);
  const ref = React.useRef();

  function handleClick() {
    setNumericFilter({ column, comparison, value });
    setFilters(filters);
    changeId(1);
    setId((previd) => previd + 1);

    changeCategory({ type: 'remove', pay: ref.current.value });
  }

  return (
    <div>

      {filters.map((e) => (
        <Filter
          setFilters={setFilters}
          filtersArray={filtersArray}
          {...e}
        />
      ))}

      <select
        ref={ref}
        value={column}
        data-testid="column-filter"
        onChange={(e) => setColumn(e.target.value)}
      >
        <option value="select">Escolha um</option>

        {categories
          .filter((e) => !filters.map((o) => o.column).includes(e))
          .map((filter) => <option key={filter} value={filter}>{filter}</option>)}
      </select>

      <select
        value={comparison}
        data-testid="comparison-filter"
        onChange={(e) => setcomparison(e.target.value)}
      >
        <option value="choose">Choose One</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
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


const mapDispatchToProps = {
  setNumericFilter: (payload) => ({ type: 'SET_NUMERIC_FILTER', payload }),
  changeId: (payload) => ({ type: 'CHANGE_ID', payload }),
  changeCategory: (payload) => ({ type: 'CHANGE_CATEGORY', payload }),
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComp);

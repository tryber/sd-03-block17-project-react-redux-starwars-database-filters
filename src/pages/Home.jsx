import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/table/Table';
import FilterContainer from '../components/filters/FilterContainer';
import FetchData from '../components/FetchData';

const integersColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const makeComparison = (column, comparison, value, element) => {
  switch (comparison) {
    case 'maior que':
      return Number(element[column]) > Number(value);
    case 'menor que':
      return Number(element[column]) < Number(value);
    case 'igual a':
      return Number(element[column]) === Number(value);
    default:
      return [];
  }
};

const orderInteger = (data, column) => data.sort((a, b) => {
  if (a[column] === 'unknown') return -1;
  if (b[column] === 'unknown') return 1;
  return Number(a[column]) - Number(b[column]);
});
const orderString = (data, column) => data.sort((a, b) => {
  if (a[column] < b[column]) return -1;
  if (a[column] > b[column]) return 1;
  return 0;
});

const orderColumns = (data, column, order) => {
  const sortedData = integersColumns.includes(column)
    ? orderInteger(data, column) : orderString(data, column);
  if (order === 'DESC') return sortedData.reverse();
  return sortedData;
};

const Home = ({
  data,
  loading,
  nameFilter,
  planetName,
  sortColumnFilter,
  sortOrderFilter,
  valueFilters,
}) => {
  const filterDataByText = data.filter(({ name }) => name.toLowerCase()
    .includes(nameFilter.toLowerCase()));
  const sortDataFilter = orderColumns(
    filterDataByText,
    sortColumnFilter.toLowerCase(),
    sortOrderFilter,
  );
  const filterDataByNumericValue = valueFilters.reduce(
    (acc, { column, comparison, value }) => acc
      .filter((element) => makeComparison(column, comparison, value, element)),
    sortDataFilter,
  );

  return loading ? (
    <FetchData />
  ) : (
    <div>
      <div>
        <FilterContainer />
      </div>
      {filterDataByNumericValue.length === 0 ? (
        <h1>Nenhum Planeta Encontrado</h1>
      ) : (
        <Table data={filterDataByNumericValue} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.planetsInfoReducer.data,
  loading: state.planetsInfoReducer.loading,
  nameFilter: state.filters.filterByName.name,
  sortColumnFilter: state.filters.order.column,
  sortOrderFilter: state.filters.order.sort,
  valueFilters: state.filters.filterByNumericValues,
});

Home.defaultProps = {
  nameFilter: '',
  valueFilters: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  nameFilter: PropTypes.string,
  sortColumnFilter: PropTypes.string.isRequired,
  sortOrderFilter: PropTypes.string.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Home);

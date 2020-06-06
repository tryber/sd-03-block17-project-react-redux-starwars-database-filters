import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/table/Table';
import FilterContainer from '../components/filters/FilterContainer';
import FetchData from '../components/FetchData';
import { makeComparison, orderColumns } from '../helpers/index';

const Home = ({
  data,
  loading,
  nameFilter,
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

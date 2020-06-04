import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets, filterByText } from '../actions';
import Table from '../components/Table';
import Filters from '../components/Filters';

class Home extends React.Component {
  static makeComparison(column, comparison, value, element) {
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
  }

  static orderColumns(data, column, order) {
    const integersColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const sortedData = (integersColumns.includes(column)) ? data.sort(
      (elemA, elemB) => elemA[column] - elemB[column],
    ) : data.sort((elemA, elemB) => elemA[column].localeCompare(elemB[column]));

    if (order === 'DESC') sortedData.reverse();
    return sortedData;
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  filterDataByText(data) {
    const { nameFilter } = this.props;
    if (nameFilter !== '') {
      return data.filter(({ name }) => name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    return data;
  }

  sortDataFilter(data) {
    const { sortColumnFilter, sortOrderFilter } = this.props;
    return Home.orderColumns(
      this.filterDataByText(data),
      sortColumnFilter.toLowerCase(),
      sortOrderFilter,
    );
  }

  filterDataByNumericValue(data) {
    const { numericFilter } = this.props;
    if (numericFilter) {
      return numericFilter.reduce(
        (acc, { column, comparison, value }) => acc.filter((element) => Home
          .makeComparison(column, comparison, value, element)),
        this.sortDataFilter(data),
      );
    }
    return this.sortDataFilter(data);
  }

  render() {
    const { data, isFetching, getByName } = this.props;
    return (
      <div className="Home">
        <div>
          <Filters onChange={(event) => getByName(event.target.value)} />
        </div>
        {isFetching ? (
          <h1>Loading..</h1>
        ) : (
          <Table data={this.filterDataByNumericValue(data)} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
  getByName: (planetName) => dispatch(filterByText(planetName)),
});

const mapStateToProps = (state) => ({
  data: state.selectPlanets.data,
  isFetching: state.selectPlanets.isFetching,
  nameFilter: state.filters.filterByName.name,
  numericFilter: state.filters.filterByNumericValues,
  sortColumnFilter: state.filters.order.column,
  sortOrderFilter: state.filters.order.sort,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.defaultProps = {
  nameFilter: '',
  numericFilter: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  nameFilter: PropTypes.string,
  getByName: PropTypes.func.isRequired,
  numericFilter: PropTypes.arrayOf(PropTypes.object),
  sortColumnFilter: PropTypes.string.isRequired,
  sortOrderFilter: PropTypes.string.isRequired,
};

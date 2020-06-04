import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByText } from '../actions/actionsCreators';
import Table from '../components/table/Table';
import FilterContainer from '../components/filters/FilterContainer';

class Home extends Component {
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
    const sortedData = integersColumns.includes(column)
      ? data.sort((elemA, elemB) => elemA[column] - elemB[column])
      : data.sort((elemA, elemB) => elemA[column].localeCompare(elemB[column]));

    if (order === 'DESC') sortedData.reverse();
    return sortedData;
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
    const { valueFilters } = this.props;
    if (valueFilters) {
      return valueFilters.reduce(
        (acc, { column, comparison, value }) => acc
          .filter((element) => Home.makeComparison(column, comparison, value, element)),
        this.sortDataFilter(data),
      );
    }
    return this.sortDataFilter(data);
  }

  render() {
    const { data, planetName } = this.props;
    return (
      <div>
        <div>
          <FilterContainer
            onChange={(event) => planetName(event.target.value)}
          />
        </div>
        <Table data={this.filterDataByNumericValue(data)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  planetName: (planetName) => dispatch(filterByText(planetName)),
});

const mapStateToProps = (state) => ({
  data: state.planetsInfoReducer.data,
  loading: state.planetsInfoReducer.loading,
  nameFilter: state.filters.filterByName.name,
  valueFilters: state.filters.filterByNumericValues,
  sortColumnFilter: state.filters.order.column,
  sortOrderFilter: state.filters.order.sort,
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
  nameFilter: PropTypes.string,
  planetName: PropTypes.func.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object),
  sortColumnFilter: PropTypes.string.isRequired,
  sortOrderFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

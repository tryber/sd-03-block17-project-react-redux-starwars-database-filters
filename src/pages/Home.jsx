import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingPlanetsInfo, filterByText } from '../actions/actionsCreators';
import Table from '../components/table/Table';
import FilterByNameBar from '../components/filters/FilterByNameBar';
import FilterByValuesBar from '../components/filters/FilterByValuesBar';
import SelectedFilters from '../components/filters/SelectedFilters';

function makeComparison(column, comparison, value, element) {
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
export class Home extends Component {
  componentDidMount() {
    const { getPlanetsInfo } = this.props;
    getPlanetsInfo();
  }

  filterDataByText(data) {
    const { nameFilter } = this.props;
    if (nameFilter !== '') {
      return data.filter(({ name }) => name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    return data;
  }

  filterDataByNumericValue(data) {
    const { valueFilters } = this.props;
    if (valueFilters) {
      return valueFilters.reduce(
        (acc, { column, comparison, value }) => acc
          .filter((element) => makeComparison(column, comparison, value, element)),
        this.filterDataByText(data),
      );
    }
    return this.filterDataByText(data);
  }

  render() {
    const { data, planetName, loading } = this.props;
    return (
      <div>
        <div>
          <FilterByNameBar
            onChange={(event) => planetName(event.target.value)}
          />
          <div>
            <FilterByValuesBar />
            <SelectedFilters />
          </div>
        </div>
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <Table data={this.filterDataByNumericValue(data)} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetsInfo: () => dispatch(fetchingPlanetsInfo()),
  planetName: (planetName) => dispatch(filterByText(planetName)),
});

const mapStateToProps = (state) => ({
  data: state.planetsInfoReducer.data,
  loading: state.planetsInfoReducer.loading,
  nameFilter: state.filters.filterByName.name,
  valueFilters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
  getPlanetsInfo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.string,
  planetName: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object),
};

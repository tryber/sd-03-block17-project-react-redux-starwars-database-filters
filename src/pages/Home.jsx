import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingPlanetsInfo, filterByText } from '../actions/actionsCreators';
import Table from '../components/table/Table';
import FilterByNameBar from '../components/FilterByNameBar';
import FilterByValuesBar from '../components/FilterByValuesBar';

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
    const { valueFilter } = this.props;
    const { column, comparison, value } = valueFilter;
    if (comparison === 'menor que') {
      return this.filterDataByText(data)
        .filter((element) => Number(element[column]) < Number(value));
    }
    if (comparison === 'maior que') {
      return this.filterDataByText(data).filter(
        (element) => Number(element[column]) > Number(value),
      );
    }
    if (comparison === 'igual a') {
      return this.filterDataByText(data).filter(
        (element) => Number(element[column]) === Number(value),
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
  valueFilter: state.filters.filterByNumericValues[0],
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.defaultProps = {
  nameFilter: '',
  valueFilter: [
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
  valueFilter: PropTypes.arrayOf(PropTypes.object),
};

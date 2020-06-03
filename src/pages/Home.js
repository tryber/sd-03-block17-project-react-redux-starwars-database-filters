import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets, filterByText } from '../actions';
import Table from '../components/Table';
import FilterByNameInput from '../components/FilterByNameInput';
import FilterByValuesInput from '../components/FilterByValuesInput';


class Home extends React.Component {
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

  filterData(data) {
    const { numericFilter } = this.props;
    const { column, comparison, value } = numericFilter;
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
    const {
      data, isFetching, getByName,
    } = this.props;
    return (
      <div className="Home">
        <div>
          <FilterByNameInput
            onChange={(event) => getByName(event.target.value)}
          />
          <div>
            <FilterByValuesInput />
          </div>
        </div>
        {isFetching ? (
          <h1>Loading..</h1>
        ) : (
          <Table data={this.filterData(data)} />
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
  numericFilter: state.filters.filterByNumericValues[0],
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
  getByName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
  numericFilter: PropTypes.arrayOf(PropTypes.object),
};
